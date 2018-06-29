import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'


const HomePage = styled.div`
background-color:grey;
background-size:cover`
class Home extends Component {
    state = {
        users:[],
        loggedUser: {
            email:'',
            password:''
        },
        loggedInstate: false,
        userId:''

    }
    

// 


    handleFindUser = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const loggedUser = {
            ...this.state.loggedUser
        }
        loggedUser[attributeName] = attributeValue

        this.setState({ loggedUser })

    }


    findUserByEmail = (event) =>{
        event.preventDefault()
        const allUsers = this.props.users || []
        const userToFind = allUsers.find((user)=>{
            return (user.email === this.state.loggedUser.email)
        })
        if(userToFind){
            console.log(userToFind)
            this.setState({loggedInstate: true, userId: userToFind._id})
        }
        else{
            console.log("didn't find user")
          alert('User not found, please create an account')
        }
        

    }
    render() {
      if(this.state.loggedInstate){
        return <Redirect to={`/users/${this.state.userId}`}/>
      }




        return (
            <HomePage>
                <div>
               <h1>Finally, you're here!</h1> 
               <h1>Now let's getIshDone!</h1>
               <form onSubmit={this.findUserByEmail}>
                    
                    <div><input
                        name="email"
                        type="text"
                        placeholder="Email"
                        onChange={this.handleFindUser} /></div>
                    <div><input
                        name="password"
                        type="password"
                        onChange={this.handleFindUser} /></div>
                    <div><input type="submit" value="Log In" /></div>
                   
                    
                </form>
                <Link to ='users/new'> <button>Create New User</button></Link>
                </div>
            </HomePage>
        );
    }
}

export default Home;