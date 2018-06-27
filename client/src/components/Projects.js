import React, { Component } from 'react';
import AllProjects from './AllProjects'
import axios from 'axios'

class Projects extends Component {
    state = {
        users: {}
      }

      componentDidMount() {
          console.log(this.props.match.params.projectId)
      if (this.props.match.params) {
          const userId = this.props.match.params.id
        const projectId = this.props.match.params.projectId
        console.log(projectId)
        axios
        .get(`/api/users/${userId}/projects/${projectId}`)
        .then(res => {
        this.setState({users: res.data})
        
        })
        .catch((err) => {
            console.error(err)
          })
        }
    }
    render() {
        console.log(this.state)
        const projectName = this.state.users.projects.projectName
        console.log('project name',projectName)
        const description = this.state.users.projects.description
        const startDate = this.state.users.projects.startDate
        const endDate = this.state.users.projects.endDate
        // console.log(userName)
        return (
            <div>
                <h1>I'm one project</h1>
                Project Name: {projectName} 
                Description: {description}
                <AllProjects 
                projects = {this.state.users.projects}
                users= {this.state.users}/>
                {/* {projects} */}
            </div>
    
        );
    }
}

export default Projects;