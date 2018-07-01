import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import AllProjects from './AllProjects';
import {Button, Form, FormGroup} from 'reactstrap'
import styled from 'styled-components'
import { CLIENT_RENEG_LIMIT } from 'tls';


const Action=styled.div`
display:flex;
justify-content: space-between;

`
const Name=styled.p`
font-weight: bold`




class ShowUser extends Component {
    state = {
        users: {},
        editUser: false
    }

    deleteProject = (projectId) => {
        const userId = this.props.match.params.id
      
        // console.log('request sent to: ' + `/api/users/${userId}/projects/${projectId}`)
        axios.delete(`/api/users/${userId}/projects/${projectId}`).then(() => {
            this.getUser(userId)
        })
    }

    deleteUser = () => {
        const userId = this.props.match.params.id
        //make a delete request to our copy of the api using the params to identify specific idea
        axios.delete(`/api/users/${userId}`).then((res) => {
            this.getUser(userId)

        })

    }


    getUser = (userId) => {
        axios
            .get(`/api/users/${userId}`)
            .then(res => {
                this.setState({ users: res.data })

            })
    }

    handleUpdate = (event) => {
        const copyOfState = { ...this.state.users }
        const attributeName = event.target.name
        const attributeValue = event.target.value
        copyOfState[attributeName] = attributeValue

        this.setState({ users: copyOfState })
    }


    submitUpdate = (event) => {
        event.preventDefault()
        const updatedUser = this.state.users
        const userId = this.props.match.params.id
        console.log(updatedUser)
        axios.put(`/api/users/${userId}`, updatedUser).then(() => {
            window.location.reload()

        })

    }

    toggleButton = () => {
        const canEdit = !this.state.editUser
        this.setState({ editUser: canEdit })
    }

    // handleNewTaskChange = (event) => {
    //     const attributeName = event.target.name
    //     const attributeValue = event.target.value

    //     const newUser = {
    //         ...this.state.newUser
    //     }
    //     newUser[attributeName] = attributeValue

    //     this.setState({ newUser })
    // };

    addNewUser = (event) => {
        event.preventDefault()

        this
            .props
            .addNewUserToUsersList(this.state.newUser)
                this.props.history.push('/users')
            
    }

    componentDidMount() {
        
        if (this.props.match.params) {
            const userId = this.props.match.params.id
            // console.log(userId)
            this.getUser(userId)

        }
    }

    render() {
        // console.log(this.state)
        const userName = this.state.users.name
        const email = this.state.users.email
        const role = this.state.users.role

        const updateForm = (<Form onSubmit={this.submitUpdate}>
        <FormGroup>
            <input
                type="text"
                name="name"
                maxLength="8"
                placeholder="name"
                value={this.state.users.name}
                onChange={this.handleUpdate} />
           </FormGroup>
           <FormGroup>
            <input
                type="text"
                name="email"
                maxLength="8"
                placeholder="email"
                value={this.state.users.email}
                onChange={this.handleUpdate} />
                </FormGroup>
                <FormGroup>
            <input
                type="text"
                name="role"
                maxLength="8"
                placeholder="role"
                value={this.state.users.role}
                onChange={this.handleUpdate} />
            <input type="submit" value="save" />
            </FormGroup>

        </Form>)



        return (
          <div>


    

              
               
              <center><h1>{userName}'s Projects </h1>
              <Name>  Email:</Name><p>{email} </p>
                <Name>Role:</Name> {role}</center> 



                <AllProjects
                getUser= {()=>this.getUser(this.props.match.params.id)}
                    users={this.state.users}
                    deleteProject={this.deleteProject} />
                  <Action> 
                <Button onClick={()=> this.props.deleteUser(this.props.match.params.id)}>Delete User</Button>
                <Link to={`/users/${this.props.match.params.id}/projects/new`}> <Button>Create New Project</Button></Link>
          
                <Button onClick={this.toggleButton}>Update Profile</Button>
               <Link to= '/'> <button>Sign Out</button></Link>

                {this.state.editUser? updateForm: null} 
</Action> 
         </div>




        );

    }
}

export default ShowUser;