import React, { Component } from 'react';

import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Table, Badge } from 'reactstrap';
import { FormGroup, Form, Input, Label } from 'reactstrap';




const Detail = styled.div`
margin-top:100px;
td, th{
background-color:#606F89;
background-size:cover;
 
justify-content:right;
// `
const Warning = styled.div`
margin-top:50px;

`
class Projects extends Component {
    state = {
        project: {},
        editProject: false
    }


    componentDidMount() {

        // this.props.getProject(projectId)

        if (this.props.match.params) {
            // console.log("PROPS", this.props)
            const userId = this.props.match.params.userId
            const projectId = this.props.match.params.id

            // console.log("Calling API")
            this.getProject(userId, projectId)

        }
    }




    handleUpdate = (event) => {
        const copyOfState = { ...this.state.project }
        const attributeName = event.target.name
        const attributeValue = event.target.value
        copyOfState[attributeName] = attributeValue

        this.setState({ project: copyOfState })
    }


    submitUpdate = (event) => {
        event.preventDefault()
        const updatedProject = this.state.project
        const projectId = this.props.match.params.id
        const userId = this.props.match.params.userId
        console.log(updatedProject)
        axios.put(`/api/users/${userId}/projects/${projectId}`, updatedProject).then(() => {
            window.location.reload()
        })


    }
    getProject= (userId, projectId)=>{
        axios.get(`/api/users/${userId}/projects/${projectId}`)
                    .then(res => {
                        console.log("response from api", res.data)
                        this.setState({project: res.data})
                        
                    })
                    .catch((err) => {
                        console.error(err)
                    })
                    
    
    
            }




    toggleButton = () => {
        const canEdit = !this.state.editProject
        this.setState({ editProject: canEdit })
    }

    render() {

        const updateForm = (<Form onSubmit={this.submitUpdate}>
            <FormGroup>
                <input
                    type="text"
                    name="projectName"

                    placeholder="project name"
                    value={this.state.project.projectName}
                    onChange={this.handleUpdate} />
                <input type="submit" value="save" />
            </FormGroup>
            <FormGroup>
                <input
                    type="text"
                    name="description"

                    placeholder="description"
                    value={this.state.project.description}
                    onChange={this.handleUpdate} />
                <input type="submit" value="save" />
            </FormGroup>
            <FormGroup>
                <input
                    type="Date"
                    name="startDate"

                    placeholder="startDate"
                    value={this.state.project.startDate}
                    onChange={this.handleUpdate} />
                <input type="submit" value="save" />
            </FormGroup>
            <FormGroup>
                <input
                    type="Date"
                    name="endDate"

                    placeholder="endDate"
                    value={this.state.project.endDate}
                    onChange={this.handleUpdate} />
                <input type="submit" value="save" />
            </FormGroup>
            <FormGroup>
            <Label for="exampleSelect">Status</Label>
          <Input type="select" name="status"  onChange={this.handleUpdate}> 
                
                    <option value="select">Select</option>
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Delayed">Delayed </option>
             
                </Input> 
                 </FormGroup> 
                 <input type="submit" value="save" />
        </Form>)




        console.log("project", this.state.project);
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
        const projectId = this.props.match.params.id
        const each = `/users/${userId}`
        return (
            
            <div>
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
                    </Table>
                </Detail>
                <Warning>
                    <button onClick={this.toggleButton}>Update Project</button>
                    {this.state.editProject ? updateForm : null}
                    <center><h3>Tasks awaiting completion:</h3></center>
                    <center> {tasksList}</center> 
                    <Link to ={`/users/${userId}/projects/${projectId}/tasks/new`}>  <button>Create New Task</button></Link>
                </Warning>
                <Link to={each}><button>Go Back</button></Link>
            </div>
        );

    }
}


export default Projects;