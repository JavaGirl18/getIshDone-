import React, { Component } from 'react';

class ShowUser extends Component {
    render() {
        const userName = this.props.name
        const email = this.props.email
        const role = this.props.role
        const projects = this.props.projects
        return (
            <div>
                <h1>I'm one user</h1>
            </div>
        );
    }
}

export default ShowUser;