import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import AllProjects from './AllProjects';
// import styled from 'styled-components'





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

        const updateForm = (<form onSubmit={this.submitUpdate}>
            <input
                type="text"
                name="name"
                maxLength="8"
                placeholder="name"
                value={this.state.users.name}
                onChange={this.handleUpdate} />
            <input type="submit" value="save" />
            <input
                type="text"
                name="email"
                maxLength="8"
                placeholder="email"
                value={this.state.users.email}
                onChange={this.handleUpdate} />
            <input type="submit" value="save" />
            <input
                type="text"
                name="role"
                maxLength="8"
                placeholder="role"
                value={this.state.users.role}
                onChange={this.handleUpdate} />
            <input type="submit" value="save" />

        </form>)



        return (
          <div>


    

              
               
               <h1> User Name: {userName} </h1>
               <p>Email: {email}</p> 
                <p>Role: {role}</p>



                <AllProjects
                    users={this.state.users}
                    deleteProject={this.deleteProject} />
                <button onClick={()=> this.props.deleteUser(this.props.match.params.id)}>Delete User</button>
                <Link to={`/users/${this.props.match.params.id}/projects/new`}> <button>Create New Project</button></Link>
                <button onClick={this.deleteUser}>Delete User</button>
                <button onClick={this.toggleButton}>Update Profile</button>

                {this.state.editUser? updateForm: null} 

         </div>




        );

    }
}

export default ShowUser;