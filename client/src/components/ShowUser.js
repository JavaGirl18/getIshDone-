import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Projects from './Projects'
import AllProjects from './AllProjects';
import styled from 'styled-components'


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

      deleteProject = (projectId) =>{
          const userId = this.props.match.params.id
          console.log('request sent to: ' + `/api/users/${userId}/projects/${projectId}`)
        axios.delete(`/api/users/${userId}/projects/${projectId}`).then((res)=>{
        })
      }
      componentDidMount() {
          console.log(this.props.match.params.id)
      if (this.props.match.params) {
        const userId = this.props.match.params.id
        console.log(userId)
        axios
        .get(`/api/users/${userId}`)
        .then(res => {
        this.setState({users: res.data})
        
        })
        .catch((err) => {
            console.error(err)
          })
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

               <AllProjects 
               users={this.state.users}
               deleteProject={this.deleteProject}/> 
               {/* <button onClick={()=> this.props.deleteUser(this.props.match.params.id)}>Delete User</button> */}
            
            </div>
        );
       
    }
}

export default ShowUser;