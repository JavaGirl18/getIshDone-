import React, { Component } from 'react';

class ProjectForm extends Component {
    state = {
        newProject: {}
    }

    handleNewProjectChange = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const newProject = {
            ...this.state.newProject
        }
        newProject[attributeName] = attributeValue

        this.setState({ newProject })
    };

    addNewProject = (event) => {
        event.preventDefault()
        const userId = this.props.match.params.userId

        this
            .props
            .addNewProjectToProjectsList(this.state.newProject, userId)
                this.props.history.push(`/users/${userId}`)
            
    }


    render() {
        return (
            <div>
                <form onSubmit={this.addNewProject}>
                    <div><input
                        name="projectName"
                        type="text"
                        placeholder="Name your Project"
                        onChange={this.handleNewProjectChange} /></div>
                    <div><input
                        name="description"
                        type="text"
                        placeholder="Describe the Ish you need to get done"
                        onChange={this.handleNewProjectChange} /></div>
                    <div><input
                        name="startDate"
                        type='Date'
                        placeholder="Start Date"
                        onChange={this.handleNewProjectChange} /></div>
                    <div><input type="submit" value="Create New Project" /></div>
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


export default ProjectForm;