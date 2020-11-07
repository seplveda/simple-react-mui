import React, { Component } from 'react';

export default class TaskForm extends Component {
    render() {
        return (
            <form>
                <input type = "text" placeholder="Agregar tareas"/>
                <br/>
                <br/>
                <textarea placeholder="Descripción de la tarea"/>
                <input type="submit"/>
            </form>

        )
    }

}