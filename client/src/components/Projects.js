import React, { Component } from 'react';

import axios from 'axios'

import { Link} from 'react-router-dom'
import { Table } from 'reactstrap';

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
                    <tr key ={index}>

                        <Link key={index} to={eachTask}>{task.taskName}</Link>
                        {/* <li key={index}>{task.description}</li> */}
                    </tr>
                )

            })
        }
        const userId = this.props.match.params.userId
        const each = `/users/${userId}`
        return (
            <div>

                {/* <h1>Project Name: {this.state.project.projectName}</h1>
                <p>Description: {this.state.project.description}</p>
                <p>Start Date: {this.state.project.startDate}</p>
                <p>End Date: {this.state.project.endDate}</p> */}
                {/* <AllTasks project={this.state.project} /> */}
                <h3>Tasks awaiting completion:</h3>
                <ul>{tasksList}</ul>
                {/* <Link to ={`/users/${this.props.match.params.userId}/projects/new`}> <button>Create New Project</button></Link> */}
                {/* <Task description = {this.state.task.description}/> */}
             
          
<h1>  {this.state.project.projectName}</h1>
 <Table bordered>
        <thead>
          <tr>
      
            <th>Description:</th>
            <th>Start Date: </th>
            <th>End Date: </th>
          </tr>
          <tr>
            
                <td> {this.state.project.description}</td>
                <td>{this.state.project.startDate}</td>
                <td>{this.state.project.endDate}</td>
              
              
          </tr>
        </thead>
        <tbody>
          
          
        </tbody> 
        {/* {tasksList} */}
      </Table>
      
  <Link to ={each}><button>Go Back</button></Link>
 </div>
);
     
    }
}


export default Projects;