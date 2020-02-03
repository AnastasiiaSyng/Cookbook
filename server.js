const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);


const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connection");
})

const recipeRouter = require('./routes/recipe');

app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/recipe', recipeRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

app.listen(port, function () {
    console.log(`Server running  on port ${port}`);
});
