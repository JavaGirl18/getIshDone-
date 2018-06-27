import React, { Component } from 'react';
import Tasks from './Tasks'
import axios from 'axios'

class Projects extends Component {
    state = {
        project: {}
    }

    componentDidMount() {
        
        if (this.props.match.params) {
            console.log("PROPS", this.props)
            const userId = this.props.match.params.userId
            const projectId = this.props.match.params.id

            console.log("Calling API")
            axios.get(`/api/users/${userId}/projects/${projectId}`)
                .then(res => {
                    console.log("response from api", res.data)
                    this.setState({ project: res.data })
                    // console.log("project", this.state.project);
                })
                .catch((err) => {
                    console.error(err)
                })

        }

    }

    render() {
        console.log("project", this.state.project);
        if (this.state.project.tasks) {
        var tasksList = this.state.project.tasks.map((task)=>
            <li>{task.description}</li>
        );
    }

    console.log("tasksList", tasksList)

        return (
            <div>
    
                <h1>Project Name: {this.state.project.projectName}</h1>
                <p>Description: {this.state.project.description}</p> 
                <p>Start Date: {this.state.project.startDate}</p>
                <p>End Date: {this.state.project.endDate}</p>
                <ul>{tasksList}</ul>        
            </div>

        );
    }
}

export default Projects;