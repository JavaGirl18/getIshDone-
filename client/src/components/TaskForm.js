import React, { Component } from 'react';

class TaskForm extends Component {
    state = {
        newTask: {}
    }

    handleNewTaskChange = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const newTask = {
            ...this.state.newTask
        }
        newTask[attributeName] = attributeValue

        this.setState({ newTask })
    };

    addNewTask = (event) => {
        event.preventDefault()

        this
            .props
            .addNewTaskToTasksList(this.state.newTask)
        this.props.history.push('/users/:userId/projects/:id')

    }


    render() {
        return (
            <div>
                <form onSubmit={this.addNewTask}>
                    <div><input
                        name="taskName"
                        type="text"
                        placeholder="Name your Task"
                        onChange={this.handleNewUserChange} /></div>
                    <div><input
                        name="description"
                        type="text"
                        placeholder="description"
                        onChange={this.handleNewTaskChange} /></div>
                    <div><input
                        name="status"
                        type="text"
                        placeholder="Status"
                        onChange={this.handleNewTaskChange} /></div>
                    <div><input
                        name="startDate"
                        type='Date'
                        placeholder="Start Date"
                        onChange={this.handleNewTaskChange} /></div>
                    <div><input
                        name="dueDate"
                        type='Date'
                        placeholder="Due Date"
                        onChange={this.handleNewTaskChange} /></div>
                    <div><input type="submit" value="Create New Task" /></div>
                    {/* <div><input
                        name="role"
                        type="text"
                        placeholder="What's your role?"
                        onChange={this.handleNewUserChange} /></div>
                    <div><input type="submit" value="Create New User" /></div> */}

                </form>
            </div>
        )
    }

}


export default TaskForm;