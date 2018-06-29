import React, { Component } from 'react';

class TaskForm extends Component {
    state = {
        newTask: {}
    }

    handleNewTaskChange = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const newUTask = {
            ...this.state.newTask
        }
        newUser[attributeName] = attributeValue

        this.setState({ newTask })
    };

    addNewTask = (event) => {
        event.preventDefault()

        this
            .props
            .addNewUserToUsersList(this.state.newUser)
                this.props.history.push('/users')
            
    }


    render() {
        return (
            <div>
                <form onSubmit={this.addNewUser}>
                    <div><input
                        name="name"
                        type="text"
                        placeholder="Name"
                        onChange={this.handleNewUserChange} /></div>
                    <div><input
                        name="email"
                        type="text"
                        placeholder="Email"
                        onChange={this.handleNewUserChange} /></div>
                    <div><input
                        name="role"
                        type="text"
                        placeholder="What's your role?"
                        onChange={this.handleNewUserChange} /></div>
                    <div><input type="submit" value="Create New User" /></div>
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