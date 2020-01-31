import React, { Component } from 'react';

export default class CreateReсipe extends Component {
    constructor() {
        super();

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
        console.log('form submited');
        console.log(this.state);
        this.setState({
            title: '',
            ingrediens: '',
            directions: '',
            date: new Date().toLocaleDateString()
        })
        console.log(this.state.title);
        
    }

    render () {
        return (
            <div>
                <h3>My new recipe</h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Name of dish</label>
                        <input 
                        type='text'
                        value={this.state.title}
                        onChange={this.onChangeName}
                        />
                    </div>
                    <div>
                        <label>Ingrediens</label>
                        <input 
                        type='text'
                        value={this.state.ingrediens}
                        onChange={this.onChangeIngredians}
                        />
                    </div>
                    <div>
                        <label>Directions</label>
                        <input 
                        type='text'
                        value={this.state.directions}
                        onChange={this.onChangeDirections}
                        />
                    </div>
                    <div>
                        <button 
                        type='submit'
                        >Create</button>
                    </div>
                </form>
            </div>
        )
    }
}