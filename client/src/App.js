import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'
import axios from 'axios'
import ShowUser from './components/ShowUser'
import Projects from './components/Projects'
import Task from './components/Tasks'
import NewUser from './components/NewUserForm'
import NewProject from './components/ProjectForm'
import AllProjects from './components/AllProjects'
class App extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    axios.get('/api/users').then((res) => {
      this.setState({ users: res.data })
    })

      .catch((err) => {
        console.error(err)
      })
  }

  addNewUserToUsersList = (newUser) => {
    axios.post('/api/users', newUser).then((res) => {
      const usersList = [...this.state.users]
      usersList.push(res.data)
      this.setState({ users: usersList })
    })
  }

addNewProjectToProjectsList = (newProject, userId)=>{
  axios.post(`/api/users/${userId}/projects`, newProject).then((res)=>{
  })
}  



  deleteUser = (userId) => {
   
    //make a delete request to our copy of the api using the params to identify specific idea
    axios.delete(`/api/users/${userId}`).then((res) => {
        //setstate
        this.setState({
            //data matching user will be removed from the state.user
            users: res.data
          
        })
    })
}



  render() {
    const HomePage = (props) => {
      return (
        <Home users={this.state.users}{...props} />
      )
    }
    const UsersPage = (props) => {
      return (
        <Users users={this.state.users}{...props} />
      )
    }
    const ShowUserPage = (props) => {
      return (
        <ShowUser users={this.state.users}{...props}  deleteUser={this.deleteUser}/>
      )
    }
    const ProjectsPage = (props) => {
      return (
        <Projects users={this.state.users} {...props} />
      )
    }
    const TaskPage = (props) => {
      return (
        <Task users={this.state.users} />
      )
    }
    const NewUserPage = (props) => {
      return (
        <NewUser addNewUserToUsersList={this.addNewUserToUsersList}{...props} />
      )
    }
    const NewProjectsPage = (props) => {
      return (
        <NewProject addNewProjectToProjectsList={this.addNewProjectToProjectsList}{...props} />
      )
    }
   
    return (
      <Router>

        <Switch>

          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/users' render={UsersPage}></Route>
          <Route exact path='/users/new' render={NewUserPage}></Route>
          <Route exact path='/users/:id' render={ShowUserPage}></Route>
          <Route exact path='/users/:userId/projects/new' render={NewProjectsPage}></Route>
          <Route exact path='/users/:userId/projects/:id' render={ProjectsPage}></Route>
          <Route exact path='/users/:userId/projects/:projectId/tasks/:id' render={TaskPage}></Route>



        </Switch>


      </Router>
    )
  }
}

export default App;
