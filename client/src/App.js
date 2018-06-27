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
        <ShowUser users={this.state.users}{...props} />
      )
    }
    const ProjectsPage = (props) => {
      return (
        <Projects users={this.state.users} {...props} />
      )
    }
    // const TaskPage = (props) => {
    //   return (
    //     // <Task users={this.state.users} />
    //   // )
    // // }
    return (
      <Router>

        <Switch>

          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/users' render={UsersPage}></Route>
          <Route exact path='/users/:id' render={ShowUserPage}></Route>
          <Route exact path='/users/:userId/projects/:id' render={ProjectsPage}></Route>
          {/* <Route exact path='/users/:userId/projects/:projectId/tasks/:id' render={TaskPage}></Route> */}
          

        </Switch>


      </Router>
    )
  }
}

export default App;
