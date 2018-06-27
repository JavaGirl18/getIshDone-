import React, { Component } from 'react';
import axios from 'axios'
import AllProjects from './AllProjects';

class ShowUser extends Component {
    state = {
        users: {}
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
        // console.log(userName)
        return (
            <div>
                <h1>I'm one user</h1>
                User Name: {userName} 
                Email: {email}
                Role: {role}
               
                <AllProjects 
                projects = {this.state.users.projects}
                users= {this.state.users}/>
                {/* {projects} */}
            </div>
        );
    }
}

export default ShowUser;