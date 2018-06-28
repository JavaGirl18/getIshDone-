import React, { Component } from 'react';
import Tasks from './Tasks'
import axios from 'axios'
import AllTasks from './AllTasks';

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
    //     console.log("project", this.state.project);
    //     if (this.state.project.tasks) {
    //     var tasksList = this.state.project.tasks.map((task,index)=>
    //     // const eachTask= `/users/${this.props.users._id}/projects/${projects._id}`
    //         <li key={index}>{task.taskName}</li>
            
    //     );
    // }

    // console.log("tasksList", tasksList)

        return (
            <div>
    
                <h1>Project Name: {this.state.project.projectName}</h1>
                <p>Description: {this.state.project.description}</p> 
                <p>Start Date: {this.state.project.startDate}</p>
                <p>End Date: {this.state.project.endDate}</p>
                <AllTasks project = {this.state.project}/>
                {/* <ul>{tasksList}</ul>         */}
            </div>

        );
    }
}

export default Projects;