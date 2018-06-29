import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AllProjects extends Component {
    render() {

        const projectsList = this.props.users.projects || []
        console.log(projectsList)
        console.log('project list', projectsList)
        // console.log("this is the project list", projectsList)
        const allProjects = projectsList.map((projects, index) => {

            let eachProject = `/users/${this.props.users._id}/projects/${projects._id}`
            console.log(this.props.users.projects[index]._id)
            return (
                <div>


                    <li key={index}>

                        <Link to={eachProject}>{projects.projectName}</Link>

                    </li>
                    <button onClick={() => this.props.deleteProject(this.props.users.projects[index]._id)}>Delete Project</button>
                </div>
            )
        })
        return (
            <div>
                {/* <Projects projects ={this.state.users.projects}/> */}
                {allProjects}
            </div>
        );
    }
}

export default AllProjects;