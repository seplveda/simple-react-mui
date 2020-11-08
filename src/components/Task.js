import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class Task extends Component {

    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render() {
        const {task} = this.props;
        return <p style={this.StyleCompleted()}>
            <Card variant="outlined">
                <CardContent onClick={this.props.checkDone.bind(this, task.id)}>
                    <List >
                        <ListItem>
                        <ListItemText
                            primary={task.title}
                            secondary={task.description}
                        />
                        <ListItemSecondaryAction>
                            <IconButton 
                                edge="end" 
                                aria-label="delete"
                                onClick={this.props.deleteTask.bind(this, task.id)}
                                >
                            <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </p>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task;