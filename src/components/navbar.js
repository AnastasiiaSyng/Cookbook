import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to='/create' className="nav-link" style={{color: "lightgrey"}}>Add new recipes</Link> 
                <Link to='/' className="nav-link" style={{color: "lightgrey"}}>See all my recipes</Link>
            </div>
        )
    }
}