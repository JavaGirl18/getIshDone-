import React, { Component } from 'react';

class NewUserForm extends Component {
    state = {
        newUser: {}
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
            // this.props.getUser()
                this.props.history.push('/users')
            
    }


    render() {
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
                    {/* <div><input
                        name="role"
                        type="text"
                        placeholder="What's your role?"
                        onChange={this.handleNewUserChange} /></div>
                    <div><input type="submit" value="Create New User" /></div> */}
                    
                </form>

                
            </div>
        )
    }

}


export default NewUserForm;