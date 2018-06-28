import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Tasks from './Tasks'


class AllTasks extends Component {
    render() {
        
        // console.log("project", this.state.project);
        if (this.props.project.tasks) {
        var tasksList = this.props.project.tasks.map((task,index)=>
        // const eachTask= `/users/${this.props.users._id}/projects/${projects._id}`
            <li key={index}>{task.taskName}
            {task.description}</li>
            
        );
    }
        return (
            <div>
          {tasksList}
            </div>
        );
    }
}

export default AllTasks;