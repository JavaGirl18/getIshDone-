import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class AllProjects extends Component {
    render() {
        
            const projectsList = this.props.users.projects || []
            console.log(this.props.users.projects)
            console.log('project list', projectsList)
            // console.log("this is the project list", projectsList)
            const allProjects = projectsList.map((projects, index) => {
                
                let eachProject = `/users/${this.props.users._id}/projects`
            //    console.log(eachProjects)
                return (
                    <li key={index}>
                         <Link to={eachProject}>{projects.projectName}</Link>
                         Description: {projects.description}
                         {projects.startDate}
                         {projects.endDate}
                       
                    </li>
                )
            })
        return (
            <div>
               {allProjects}
            </div>
        );
    }
}

export default AllProjects;