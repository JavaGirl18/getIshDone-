import React, { Component } from 'react';

class Home extends Component {
    state = {
        users:[],
        loggedUser: {
            email:'',
            password:''
        }
    }
    
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
        }
        else{
            console.log("didn't find user")
        }
        

    }
    render() {
        console.log(this.props)
        return (
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
                    <div><input type="submit" value="Create New User" /></div>
                   
                    
                </form>
            </div>
        );
    }
}

export default Home;