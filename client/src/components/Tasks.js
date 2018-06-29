import React, { Component } from 'react';
import axios from 'axios'

class Tasks extends Component {
    state = {
        task: {}
    }

    componentDidMount() {

        if (this.props.match.params) {
            console.log("STATE", this.state)
            const taskId = this.props.match.params.id
            const userId = this.props.match.params.userId
            const projectId = this.props.match.params.projectId

            console.log("Calling API")
            axios.get(`/api/users/${userId}/projects/${projectId}/tasks/${taskId}`)
                .then(res => {
                    console.log("response from api", res.data)
                    this.setState({ task: res.data })

                })
                .catch((err) => {
                    console.error(err)
                })

        }

    }

    render() {
        return (
            <div>
                <h1>Task:{this.state.task.taskName}</h1>
                <p>Description: {this.state.task.description}</p>
                <p>Status:{this.state.task.status}</p>
               <p>Start Date: {this.state.task.startDate}</p>
               <p>Due Date: {this.state.task.dueDate}</p>
  
                <button>Create New Task</button>
            </div>
        );
    }
}

export default Tasks;