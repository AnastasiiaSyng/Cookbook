import React, { Component } from 'react';
import axios from 'axios';



export default class EditReсipe extends Component {
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

    componentDidMount() {
        axios.get('http://localhost:5000/recipe/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    ingrediens: res.data.ingrediens,
                    directions: res.data.directions,
                })
            })
            .catch(err => console.log('err'+ err));
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

        const recipe = {
            title: this.state.title,
            ingrediens: this.state.ingrediens,
            directions: this.state.directions,
            date: this.state.date
        };
        
        axios.post('http://localhost:5000/recipe/update/'+this.props.match.params.id, recipe)
            .then(res => console.log(res.data));

        window.location = '/';
        
    }

    render () {
        return (
            <div>
                <h3>Edit recipe</h3>
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
                        >Edit</button>
                    </div>
                </form>
            </div>
        )
    }
}