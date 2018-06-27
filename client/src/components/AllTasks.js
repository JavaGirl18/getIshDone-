import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Tasks from './Tasks'


class AllTasks extends Component {
    render() {
        
            // // const tasksList = this.props.users.projects.tasks
            // console.log(this.props)
            // console.log('project list', projectsList)
            // // console.log("this is the project list", projectsList)
            // const allProjects = projectsList.map((projects, index) => {
                
            //     // let eachProject = `/users/${this.props.users._id}/projects/${projects._id}`
            // //    console.log(eachProjects)
            //     return (
            //         <li key={index}>
            //              <Link to={eachProject}>{projects.projectName}</Link>
            //              {/* Description: {projects.description}
            //              Start Date: {projects.startDate}
            //             End Date: {projects.endDate} */}
                       
            //         </li>
            //     )
            // })
        return (
            <div>
           {/* <Tasks tasks = {this.state.users.projects.tasks}/> */}
            </div>
        );
    }
}

export default AllTasks;