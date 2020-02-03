import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import EditReсipe from './components/edit-recipe';
import CreateReсipe from './components/create-recipe';
import AllReсipes from './components/all-recipes';
import Navbar from './components/navbar';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
      <Router>
        <div className='container'>
          < Navbar />
          <div style={{textAlign: 'center'}}>
            <h1>my<span className="badge badge-secondary">Cookbook</span></h1>
          </div>
            <Route  path='/' exact component={AllReсipes}/>
            <Route  path='/create' component={CreateReсipe}/>
            <Route  path='/edit:id' component={EditReсipe}/>
        </div>
      </Router>
  );
}

export default App;
