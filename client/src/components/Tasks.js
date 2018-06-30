import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Tasks extends Component {
    state = {
        task: {}
    }

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

    componentDidMount() {

        if (this.props.match.params) {
            // console.log("STATE", this.state)
            const taskId = this.props.match.params.id
           
            const userId = this.props.match.params.userId
            const projectId = this.props.match.params.projectId

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
        const userId = this.props.match.params.userId
        const projectId = this.props.match.params.projectId
        return (
            
            <div>
                <h1>Task:{this.state.task.taskName}</h1>
                <p>Description: {this.state.task.description}</p>
                <p>Status:{this.state.task.status}</p>
               <p>Start Date: {this.state.task.startDate}</p>
               <p>Due Date: {this.state.task.dueDate}</p>
               
  
              <Link to ={`/users/${userId}/projects/${projectId}/tasks/new`}>  <button>Create New Task</button></Link>
            </div>
        );
    }
}

export default Tasks;