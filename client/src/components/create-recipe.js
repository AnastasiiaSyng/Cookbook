import React, { Component } from 'react';
import axios from 'axios';

export default class CreateReсipe extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeIngredians = this.onChangeIngredians.bind(this);
        this.onChangeDirections = this.onChangeDirections.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            ingrediens: '',
            directions: '',
            date: new Date().toLocaleDateString()
        }
    }

    onChangeName = (e) => {
        this.setState({title: e.target.value})
    }

    onChangeIngredians = (e) => {        
        this.setState({ingrediens: e.target.value})
    }

    onChangeDirections = (e) => {
        this.setState({directions: e.target.value})
    }
    
    onSubmit (e) {
        e.preventDefault();
        const recipe = {
                title: this.state.title,
                ingrediens: this.state.ingrediens,
                directions: this.state.directions,
                date: new Date().toLocaleDateString()
        };
        
        axios.post('http://localhost:5000/recipe/add', recipe)
            .then(res => console.log(res.data));

        this.setState({
            title: '',
            ingrediens: '',
            directions: '',
            date: ''
        }) 
    }

    render () {
        return (
            <div>
                <h3>new recipe</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name of dish</label>
                        <input 
                        className="form-control"
                        type='text'
                        value={this.state.title}
                        onChange={this.onChangeName}
                        />
                    </div>
                    <div>
                        <label>Ingrediens</label>
                        <input 
                        className="form-control"
                        type='text'
                        value={this.state.ingrediens}
                        onChange={this.onChangeIngredians}
                        />
                    </div>
                    <div>
                        <label>Directions</label>
                        <input 
                        className="form-control"
                        type='text'
                        value={this.state.directions}
                        onChange={this.onChangeDirections}
                        />
                    </div>
                    <div>
                        <button 
                        style={{marginTop: '20px'}}
                        className="btn btn-warning"
                        type='submit'
                        >Create</button>
                    </div>
                </form>
            </div>
        )
    }
}