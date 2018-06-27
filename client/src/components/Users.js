import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Users extends Component {
    render() {
        const usersList = this.props.users
        console.log(usersList)
        const allUsers = usersList.map((user, index)=>{
            console.log(usersList)
            console.log("user.name", user.name)
            let eachUser = `/users/${index}`
            console.log(usersList[index])
            return (
                <li key={index}>
                    <Link to={eachUser}>{user.name}</Link>
                    {user.email}
                    
                </li>
            )
        })


        return (
            <div>
                <h1>I am Users</h1>
                {allUsers}
            </div>
        );
    }
}

export default Users;