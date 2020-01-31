import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import EditReсipe from './components/edit-recipe';
import CreateReсipe from './components/create-recipe';
import AllReсipes from './components/all-recipes';
import Navbar from './components/navbar'


function App() {
  return (
      <Router>
        <div>
          < Navbar />
            <h1>My Cookbook</h1>
            <Route  path='/' exact component={AllReсipes}/>
            <Route  path='/create' component={CreateReсipe}/>
            <Route  path='/edit:id' component={EditReсipe}/>
        </div>
      </Router>
  );
}

export default App;
