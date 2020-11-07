import React, { Component } from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }
    
    onSubmit = e => {
        console.log('enviando...')
        console.log(this.state)
        e.preventDefault();
    }

    onChange = e => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type = "text"
                    name = "title" 
                    placeholder="Agregar tareas" 
                    onChange={this.onChange} 
                    value={this.state.title}/>
                <br/>
                <br/>
                <textarea 
                    placeholder="Descripción de la tarea"
                    name = "description"  
                    onChange={this.onChange} 
                    value={this.state.description}/>
                <button type="submit">
                    Agregar tarea
                </button>
            </form>

        )
    }

}