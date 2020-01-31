import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <Link to='/create'>Add new recipes</Link> 
                <Link to='/'>See all my recipes</Link>
            </div>
        )
    }
}