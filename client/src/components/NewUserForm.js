import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
class NewUserForm extends Component {
    state = {
        newUser: {},
        redirect: false
    }

    handleNewUserChange = (event) => {
        const attributeName = event.target.name
        const attributeValue = event.target.value

        const newUser = {
            ...this.state.newUser
        }
        newUser[attributeName] = attributeValue

        this.setState({ newUser })
    };

    addNewUser = (event) => {
        event.preventDefault()

        this
            .props
            .addNewUserToUsersList(this.state.newUser)
            
            this.setState({redirect:true})
           
            // this.props.getUser()
               
            
    }


    render() {
        if (this.state.redirect) {
            console.log('redirecting')
            return <Redirect push to={'/'} />
        }
        return (
           
            <div>
                <form onSubmit={this.addNewUser}>
                    <div><input
                        name="name"
                        type="text"
                        placeholder="Name"
                        onChange={this.handleNewUserChange} /></div>
                    <div><input
                        name="email"
                        type="text"
                        placeholder="Email"
                        onChange={this.handleNewUserChange} /></div>
                    <div><input
                        name="role"
                        type="text"
                        placeholder="What's your role?"
                        onChange={this.handleNewUserChange} /></div>
                    <div><input type="submit" value="Create New User" /></div>
                  


                  
                    
                </form>

                
            </div>
        )
    }

}


export default NewUserForm;