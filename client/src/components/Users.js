import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
    // componentDidMount(){
    //     this.props.getUser()
    // }

    render() {
        const usersList = this.props.users
        console.log(usersList)
        const allUsers = usersList.map((users, index) => {
            let eachUser = `/users/${users._id}`
            console.log(eachUser)
            return (
                <div>
                <li key={index}>
                    <Link to={eachUser}>
                    {users.email}</Link>
                </li>
               
                 </div>
            )
           
        })
       
        


        return (
            <div>
                <h1>I am Users</h1>
                {allUsers}
              {/* <Link to ='users/new'> <button>Create New User</button></Link> */}
            </div>
        );
    }
}

export default Users