import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }
    
    onSubmit = e => {
        console.log('enviando...')
        console.log(this.state)
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault();
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Card variant="outlined">
                <CardContent>
                    <form onSubmit={this.onSubmit} autoComplete="off">
                        <FormControl fullWidth>
                            <Input 
                                type = "text"
                                name = "title" 
                                placeholder="Agregar tareas" 
                                onChange={this.onChange} 
                                value={this.state.title}/>
                            <br/>
                            <TextareaAutosize
                                rowsMin={3}
                                rowsMax={4}
                                placeholder="Descripción de la tarea"
                                name = "description"  
                                onChange={this.onChange} 
                                value={this.state.description}/>
                            <br/>
                            <Button 
                                type="submit"
                                variant="contained" 
                                color="primary"
                                >
                                Agregar tarea
                            </Button>
                        </FormControl>
                    </form>
                </CardContent>
            </Card>
        )
    }

}