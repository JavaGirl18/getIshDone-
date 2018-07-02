import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
class TaskForm extends Component {
    state = {
        newTask: {}
    }

    handleNewTaskChange = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const newTask = {
            ...this.state.newTask
        }
        newTask[attributeName] = attributeValue

        this.setState({ newTask })
    };

    addNewTask = (event) => {
        event.preventDefault()
        const userId = this.props.match.params.userId
        const projectId = this.props.match.params.projectId
        this
            .props
            .addNewTaskToTasksList(this.state.newTask, userId,projectId)
         
        this.props.history.push(`/users/${userId}/projects/${projectId}`)
    }


    render() {
        return (
            <div>

                     <Form onSubmit={this.addNewTask}>
        <FormGroup>
          <Label for="exampleEmail">Task Name</Label>
          <Input type='text' name="taskName" placeholder="name your task"    onChange={this.handleNewTaskChange} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Description</Label>
          <Input type="description" name="description" placeholder="desrcibe task"  onChange={this.handleNewTaskChange} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Start Date</Label>
          <Input type="Date" name="startDate" placeholder="start date"  onChange={this.handleNewTaskChange} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Due Date</Label>
          <Input type="Date" name="dueDate" placeholder="due date"  onChange={this.handleNewTaskChange} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Status</Label>
          <Input type="select" name="status"    onChange={this.handleNewTaskChange}> 
            <option>Select</option>
            <option>Not started</option>
            <option>In progress</option>
            <option>Need more info</option>
            <option>Delayed</option>
          </Input>
           </FormGroup>
        <input type="submit" value="Create New Task" />
         
          </Form>
            </div>
        )
    }

}


export default TaskForm;