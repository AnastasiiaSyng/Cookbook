import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Recipe = props => (
    <tr className="card">
      <td className="card-header">{props.recipe.title}</td>
      <td className="card-text">{props.recipe.ingrediens}</td>
      <td className="card-text">{props.recipe.directions}</td>
      <td className="blockquote-footer">{props.recipe.date}</td>
      <td>
        <Link to={"/edit/"+props.recipe._id} className="btn btn-outline-secondary">edit</Link> | <a href="#" onClick={() => {props.deleteRecipe(props.recipe._id)}} className="btn btn-outline-danger">delete</a>
      </td>
    </tr>
  )

export default class AllReсipes extends Component {
    constructor(props) {
        super(props);

        this.deleteRecipe = this.deleteRecipe.bind(this);
        this.state = {
            recipe: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/recipe/')
            .then(res => {
                this.setState({
                    recipe: res.data
                })
            })
            .catch(err => console.log('Err' + err));
    }

    deleteRecipe(id) {
        axios.delete('http://localhost:5000/recipe/'+id)
            this.setState({
                recipe: this.state.recipe.filter(item => item._id !== id)
            })
    }

    recipeList() {
        return this.state.recipe.map(item => {
            return <Recipe recipe={item} deleteRecipe={this.deleteRecipe} key={item._id} />;
        })
    }

    render () {
        return (
            <div> 
                {this.recipeList()}
            </div>
        )
    }
}