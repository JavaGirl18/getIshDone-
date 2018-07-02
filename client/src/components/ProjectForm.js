import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class ProjectForm extends Component {
    state = {
        newProject: {}
    }

    handleNewProjectChange = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const newProject = {
            ...this.state.newProject
        }
        newProject[attributeName] = attributeValue

        this.setState({ newProject })
    };

    addNewProject = (event) => {
        event.preventDefault()
        const userId = this.props.match.params.userId

        this
            .props
            .addNewProjectToProjectsList(this.state.newProject, userId)
                this.props.history.push(`/users/${userId}`)
               
               
             

        }
            
    



    render() {
        return (
            <div>
               


             <Form onSubmit={this.addNewProject}>
        <FormGroup>
          <Label for="exampleEmail">Project Name</Label>
          <Input type='text' name="projectName" placeholder="name your project"   onChange={this.handleNewProjectChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Description</Label>
          <Input type="description" name="description" placeholder="desrcibe project"    onChange={this.handleNewProjectChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Start Date</Label>
          <Input type="Date" name="startDate" placeholder="start date"  onChange={this.handleNewProjectChange} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Due Date</Label>
          <Input type="Date" name="endDate" placeholder="due date"   onChange={this.handleNewProjectChange} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Status</Label>
          <Input type="select" name="status"    onChange={this.handleNewProjectChange}> 
            <option>Select</option>
            <option>Not started</option>
            <option>In progress</option>
            <option>Need more info</option>
            <option>Delayed</option>
          </Input>
           </FormGroup>
        <input type="submit" value="Create New Task" />
         
          </Form>

                    
                    {/* <div><input
                        name="role"
                        type="text"
                        placeholder="What's your role?"
                        onChange={this.handleNewUserChange} /></div>
                    <div><input type="submit" value="Create New User" /></div> */}
                    
                {/* </form> */}
            </div>
        )
    }

}


export default ProjectForm;