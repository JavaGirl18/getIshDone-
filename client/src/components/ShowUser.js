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

    updateUser = () => {
        const userId = this.props.match.params.id
    //use .find to match 
        const updatedUser= this.state.users.find(user=> user._id === userId)
        //make patch request to modify the selected params' data held in our db
        axios.patch(`/api/users/${userId}`, updatedUser).then((res) => {
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


     {/* <UpdateFormStyle>
    
    <input onChange={(event)=>this.handleChange(event.user._id)}
        type="text"
        name="name"
        value={user.name}
        onBlur={() => this.updateUser(user._id)}
    />
    <textarea
        name="description"
        value={user.description}
        onChange={(event)=>this.handleChange(event,user._id)}
        onBlur={() => this.updateUser(user._id)}
    />

</UpdateFormStyle> */}

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