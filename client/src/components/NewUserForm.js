import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Form, FormGroup, Label, Input } from 'reactstrap';
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

        this.setState({ redirect: true })

        // this.props.getUser()


    }


    render() {
        if (this.state.redirect) {
            console.log('redirecting')
            return <Redirect push to={'/'} />
        }
        return (

            <div>
                {/* <form onSubmit={this.addNewUser}>
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
                    <div><input type="submit" value="Create New User" /></div> */}

                <Form onSubmit={this.addNewUser}>
                    <FormGroup>
                        <Label for="exampleEmail"> Name</Label>
                        <Input type='text' name="name" placeholder="what's your name" onChange={this.handleNewUserChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Email</Label>
                        <Input type="description" name="email" placeholder="what's your email" onChange={this.handleNewUserChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Create a Password</Label>
                        <Input type="password" name="password" placeholder="password" onChange={this.handleNewUserChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Your role</Label>
                        <Input type="select" name="role" placeholder="due date" onChange={this.handleNewUserChange} >
                            <option>Select</option>
                            <option>Owner</option>
                            <option>Team Member</option>
                        </Input>
                    </FormGroup>
                    <input type="submit" value="Create New User" />

                </Form>







            </div >
        )
    }

}


export default NewUserForm;