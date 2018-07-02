import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import AllProjects from './AllProjects';
import { Form, FormGroup, Label, Input } from 'reactstrap'
import styled from 'styled-components'



const Action = styled.div`
display:flex;
justify-content: space-between;
FormGroup{
    color:pink
}

`
const Name = styled.p`
font-weight: bold`




class ShowUser extends Component {
    state = {
        users: {},
        editUser: false,
        redirect: false
    }
    getUser = (userId) => {
        axios
            .get(`/api/users/${userId}`)
            .then(res => {
                this.setState({ users: res.data })

            })
    }
    deleteProject = (projectId) => {
        const userId = this.props.match.params.id

        // console.log('request sent to: ' + `/api/users/${userId}/projects/${projectId}`)
        axios.delete(`/api/users/${userId}/projects/${projectId}`).then((res) => {
            window.location.reload()
            // this.getUser(projectId)
        })
    }

    deleteUser = (id) => {
        this.props.deleteUser(id)
        this.setState({ redirect: true })
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
        if (this.state.redirect) {
            console.log('redirecting')
            return <Redirect push to={'/'} />
        }
        // console.log(this.state)
        const userName = this.state.users.name
        const email = this.state.users.email
        const role = this.state.users.role

 


        const updateForm = (<Form onSubmit={this.submitUpdate}>
            <FormGroup>
                <Label for="exampleEmail">Project Name</Label>
                <Input type='text' name="name" placeholder="What's your name" value={this.state.users.name} onChange={this.handleUpdate} />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Email</Label>
                <Input type="text" name="email" placeholder="email" value={this.state.users.email} onChange={this.handleUpdate} />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Role</Label>
                <Input type="text" name="role" placeholder="role" value={this.state.users.role} onChange={this.handleUpdate} />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="text" name="password" placeholder="password" onChange={this.handleNewProjectChange} />
                <input type="submit" value="Update Profile" />
            </FormGroup>
        </Form>)



        return (
            <div>






                <center><h1>{userName}'s Projects </h1>
                    <Name>  Email:</Name><p>{email} </p>
                    <Name>Role:</Name> {role}</center>



                <AllProjects
                    getUser={() => this.getUser(this.props.match.params.id)}
                    users={this.state.users}
                    deleteProject={this.deleteProject} />
                <Action>
                    <button onClick={() => this.deleteUser(this.props.match.params.id)}>Delete User</button>
                    <Link to={`/users/${this.props.match.params.id}/projects/new`}> <button>Create New Project</button></Link>

                    <button onClick={this.toggleButton}>Update Profile</button>
                    <Link to='/'> <button>Sign Out</button></Link>


                </Action>
                {this.state.editUser ? updateForm : null}
            </div>




        );

    }
}

export default ShowUser;