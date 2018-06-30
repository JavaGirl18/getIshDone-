import React, { Component } from 'react';

import axios from 'axios'

import { Link } from 'react-router-dom'

class Projects extends Component {
    state = {
        project: {}
    }
  

    componentDidMount() {

        if (this.props.match.params) {
            // console.log("PROPS", this.props)
            const userId = this.props.match.params.userId
            const projectId = this.props.match.params.id

            // console.log("Calling API")
            axios.get(`/api/users/${userId}/projects/${projectId}`)
                .then(res => {
                    // console.log("response from api", res.data)
                    this.setState({ project: res.data })

                })
                .catch((err) => {
                    console.error(err)
                })

        }
      

    }

    render() {
        // console.log("project", this.state.project);
        if (this.state.project.tasks) {
            const userId = this.props.match.params.userId
            const projectId = this.props.match.params.id
            // console.log('i a this', this)
            var tasksList = this.state.project.tasks.map((task, index) => {
                const eachTask = `/users/${userId}/projects/${projectId}/tasks/${task._id}`
                return (
                    <li key ={index}>

                        <Link key={index} to={eachTask}>{task.taskName}</Link>
                        {/* <li key={index}>{task.description}</li> */}
                    </li>
                )

            })
        }


        return (
            <div>

                <h1>Project Name: {this.state.project.projectName}</h1>
                <p>Description: {this.state.project.description}</p>
                <p>Start Date: {this.state.project.startDate}</p>
                <p>End Date: {this.state.project.endDate}</p>
                {/* <AllTasks project={this.state.project} /> */}
                <h3>Tasks awaiting completion:</h3>
                <ul>{tasksList}</ul>
                {/* <Link to ={`/users/${this.props.match.params.userId}/projects/new`}> <button>Create New Project</button></Link> */}
                {/* <Task description = {this.state.task.description}/> */}
                <button>Go Back</button>
            </div>

        );
    }
}


export default Projects;