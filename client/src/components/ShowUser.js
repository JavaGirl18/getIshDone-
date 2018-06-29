import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Projects from './Projects'
import AllProjects from './AllProjects';
import styled from 'styled-components'

const UpdateFormStyle = styled.form`
`
// const Users = styled.div`
// background-color:grey;
// button {
//     background: red;
//     border-radius: 10px;
//     font-size: 1.3rem;
//     color: black;
//   }`

class ShowUser extends Component {
    state = {
        users: {}
    }

    deleteProject = (projectId) => {
        const userId = this.props.match.params.id
        const userURL = `/users/${userId}`
        console.log('request sent to: ' + `/api/users/${userId}/projects/${projectId}`)
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
        const copyOfState = {...this.state.users}
        const attributeName = event.target.name
        const attributeValue = event.target.value
        copyOfState[attributeName] = attributeValue
       
        this.setState({users:copyOfState})
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



    componentDidMount() {
        console.log(this.props.match.params.id)
        if (this.props.match.params) {
            const userId = this.props.match.params.id
            console.log(userId)
            this.getUser(userId)

        }
    }

    render() {
        console.log(this.state)
        const userName = this.state.users.name
        const email = this.state.users.email
        const role = this.state.users.role
        const projects = this.state.users.projects
        // let eachProject = `/users/${users._id}/projects/${project._id}`
        // console.log(userName)
        return (
            <div>
                <h1>I'm one user</h1>
                User Name: {userName}
                Email: {email}
                Role: {role}


                <form onSubmit={this.submitUpdate}>
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

                </form>

                <AllProjects
                    users={this.state.users}
                    deleteProject={this.deleteProject} />
                {/* <button onClick={()=> this.props.deleteUser(this.props.match.params.id)}>Delete User</button> */}
                <Link to={`/users/${this.props.match.params.id}/projects/new`}> <button>Create New Project</button></Link>
                <button onClick={this.deleteUser}>Delete User</button>


            </div>




        );

    }
}

export default ShowUser;