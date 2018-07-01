import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'
import { Button, Form,FormGroup, Label, Input} from 'reactstrap'




const Container = styled.div`
border:solid;
display:block;
justify-content:center;
margin-auto
;
`




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
        
        
         alert('User not found, please create an account')
}
    }

        

    
    render() {
      if(this.state.loggedInstate){
        return <Redirect to={`/users/${this.state.userId}`}/>
      }




        return (
            <div>
             
               <h1>Finally, you're here!</h1> 
               <h1>Now let's getIshDone!</h1>
           
             



             
             <Container>
                <Form inline onSubmit={this.findUserByEmail}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" onChange={this.handleFindUser}/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" onChange={this.handleFindUser}  />
        </FormGroup>
        <Button>Submit</Button>
      </Form> 
     
                <Link to ='users/new'> <Button
               
                >Create New User</Button></Link>
               </Container> 
           </div>
        );
    }
}

export default Home;