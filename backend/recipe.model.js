const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RecipeSchema = new Schema ({
    title: {
        type: String
    },
    ingrediens: {
        type: String
    },
    directions: {
        type: String
    },
    date: {
        type: String
    }
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;