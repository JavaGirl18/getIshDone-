import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Table} from 'reactstrap'
import styled from 'styled-components'


const Task=styled.div`
margin-top:100px
td, th{
    background-color:#605F89;
    background-size:cover;
`
class Tasks extends Component {
    state = {
        task: {}
    }

    // getUser = () => {
    //     const userId = this.props.match.params.userId
    //     const projectId = this.props.match.params.projectId
    //     axios.get('/api/users/:userId/projects/:projectId').then((res) => {
    //       this.setState({ users: res.data })
    //     })
    
    //       .catch((err) => {
    //         console.error(err)
    //       })
    //   }

    handleNewTaskChange = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const newTask = {
            ...this.state.task
        }
        newTask[attributeName] = attributeValue

        this.setState({newTask})
    };

    addNewTask = (event) => {
        event.preventDefault()
// console.log(this.state.newTask,'new task')
// console.log(this.props.match.params.projectId,'projectId')
        this
            .props
            .addNewTaskToTasksList(this.state.newTask)

        this.props.history.push('/users/:userId/projects/:id')

    }
    getTask = (taskId) => {
        const userId = this.props.match.params.userId
        const projectId = this.props.match.params.projectId
        axios
            .get(`/api/users/${userId}/projects/${projectId}/tasks`)
            .then(res => {
                this.setState({ task: res.data})

            })
    }

    deleteTask = (taskId) => {
       
        const userId = this.props.match.params.userId
        const projectId = this.props.match.params.projectId
      
        // // console.log('request sent to: ' + `/api/users/${userId}/projects/${projectId}`)
        axios.delete(`/api/users/${userId}/projects/${projectId}/tasks/${taskId}`).then((res) => {
       
           this.setState({task: res.data})
            console.log( this.props.getUsers,'getuserssss')
        })
      }

    componentDidMount() {

        if (this.props.match.params) {
            // console.log("STATE", this.state)
            const taskId = this.props.match.params.id
           
            const userId = this.props.match.params.userId
            const projectId = this.props.match.params.projectId
// this.getTask(taskId)
            // console.log("Calling API")
            axios.get(`/api/users/${userId}/projects/${projectId}/tasks/${taskId}`)
                .then(res => {
                    // console.log("response from api", res.data)
                    this.setState({ task: res.data,projectId: projectId, userId:userId })
//  console.log('res', res.data)
                })
                .catch((err) => {
                    console.error(err)
                })

        }

    }

    render() {

        // const updateForm = (<Form onSubmit={this.submitUpdate}>
        //     <FormGroup>
        //         <input
        //             type="text"
        //             name="taskName"
                   
        //             placeholder="task name"
        //             value={this.state.project.name}
        //             onChange={this.handleUpdate} />
        //             <input type="submit" value="save" />
        //        </FormGroup>
        //        <FormGroup>
        //         <input
        //             type="text"
        //             name="description"
                  
        //             placeholder="description"
        //             value={this.state.project.description}
        //             onChange={this.handleUpdate} />
        //             <input type="submit" value="save" />
        //             </FormGroup>
        //             <FormGroup>
        //         <input
        //             type="Date"
        //             name="role"
                
        //             placeholder="startDate"
        //             value={this.state.project.startDate}
        //             onChange={this.handleUpdate} />
        //         <input type="submit" value="save" />
        //         </FormGroup>
        //         <FormGroup>
        //         <input
        //             type="Date"
        //             name="role"
              
        //             placeholder="endDate"
        //             value={this.state.project.endDate}
        //             onChange={this.handleUpdate} />
        //         <input type="submit" value="save" />
        //         </FormGroup>
    
        //     </Form>)







        const userId = this.props.match.params.userId
        const projectId = this.props.match.params.projectId
        return (
            
            <div>
             <center> <h1>Task: {this.state.task.taskName}</h1></center>  
                
                <Task>
                <Table bordered>
        <thead>
          <tr>
      
           
            <th>Description: </th>
            <th>Start Date: </th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
          <tr>
            
                
                <td>{this.state.task.description}</td>
                <td>{this.state.task.startDate}</td> 
                
                   <td>{this.state.task.dueDate}</td>
                <td>{this.state.task.status}</td>
          </tr>
        </thead>
 
      </Table>
              
  
              <Link to ={`/users/${userId}/projects/${projectId}/tasks/new`}>  <button>Create New Task</button></Link>
            </Task>
            <button onClick={()=> this.deleteTask(this.props.match.params.id)}>Mark as Complete</button>
           <Link to={ `/users/${userId}/projects/${projectId}`}> <button>Go Back</button></Link>
            </div>
        );
    }
}

export default Tasks;