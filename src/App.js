import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EditReсipe from './components/edit-recipe';
import CreateReсipe from './components/create-recipe';
import AllReсipes from './components/all-recipes';


function App() {
  return (
      <Router>
        <div>
            <Link to='/create'>Add new recipes</Link> 
            <Link to='/'>See all my recipes</Link>
            <h1>My Cookbook</h1>
            <Route  path='/' exact component={AllReсipes}/>
            <Route  path='/create' component={CreateReсipe}/>
            <Route  path='/edit' component={EditReсipe}/>
        </div>
      </Router>
  );
}

export default App;
