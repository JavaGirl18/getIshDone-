import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'
import axios from 'axios'
import ShowUser from './components/ShowUser'
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
    const HomePage = (props) => (
      <Home users={this.state.users}{...props} />
    )
    const UsersPage = (props) =>(
<Users users={this.state.users}{...props}/>
    )
    const ShowUserPage = (props)=>{
      <ShowUser users={this.state.users}{...props}/>
    }
   return (
<Router>
        
        <Switch>

         <Route exact path='/' component={HomePage}></Route>
         <Route exact path='/users' render={UsersPage}></Route>
         <Route exact path='/users' render={ShowUserPage}></Route>


        </Switch>

  
    </Router>
   )
  }
}

export default App;
