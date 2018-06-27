import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
    render() {
        const usersList = this.props.users
        console.log(usersList)
        const allUsers = usersList.map((users, index) => {
            let eachUser = `/users/${users._id}`
            console.log(eachUser)
            return (
                <li key={index}>
                    <Link to={eachUser}>
                    {users.email}</Link>
                </li>
            )
        })
        // const allUsers = usersList.map((user, index)=>{
        //     let eachUser = `/users/${index}`
        //     console.log(eachUser)
        //     return 
        //     (
        //         <li key={index}>
        //             <Link to={eachUser}>{user.name}</Link>
        //             {user.email}
        //             {/* <Link to = {eachUser}>{user.name}</Link> */}
        //         </li>
        //     )
        // })
        console.log(allUsers)


        return (
            <div>
                <h1>I am Users</h1>
                {allUsers}
            </div>
        );
    }
}

export default Users;