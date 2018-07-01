import React, { Component } from 'react';

import axios from 'axios'
import styled from 'styled-components'
import { Link} from 'react-router-dom'
import { Table,Badge } from 'reactstrap';
import { Container, FormGroup, } from 'reactstrap';
import { Grid, GridItem } from 'styled-grid-responsive'



const Detail=styled.div`
margin-top:100px;
td, th{
background-color:#606F89;
background-size:cover;
 
justify-content:right;
// `
const Warning=styled.div`
margin-top:50px;

`
class Projects extends Component {
    state = {
        project: {}
    }
  

    componentDidMount() {

// this.props.getProject(projectId)

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
                // if(this.propject.task.status){
                    
                // }
                return (
                 <div>
                     

                  <Badge color="warning">      <Link key={index} to={eachTask}>{task.taskName}</Link></Badge>
                        {/* <li key={index}>{task.description}</li> */}
                   </div> 
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
                    {/* <h3>Tasks awaiting completion:</h3>
             <Warning>        {tasksList}</Warning> */}
                {/* <Link to ={`/users/${this.props.match.params.userId}/projects/new`}> <button>Create New Project</button></Link> */}
                {/* <Task description = {this.state.task.description}/> */}
             
          
<center><h1>  {this.state.project.projectName}</h1></center>
<Detail>
 <Table bordered>
        <thead>
        <tr>
      
            <th>Description:</th>
            <th>Start Date: </th>
            <th>End Date: </th>
            <th>Status</th>
          </tr>
          <tr>
            
                <td> {this.state.project.description}</td>
                <td>{this.state.project.startDate}</td>
                <td>{this.state.project.endDate}</td>
                <td>{this.state.project.status}</td>
              
              
          </tr>
        </thead>
        {/* <tbody>
          
          
        </tbody>  */}
       
      </Table>
  



      </Detail>

    {/* {tasksList} */}
<Warning>
   <center><h3>Tasks awaiting completion:</h3></center> 
             <center> {tasksList}</center> </Warning>
  <Link to ={each}><button>Go Back</button></Link>
 </div>
);
     
    }
}


export default Projects;