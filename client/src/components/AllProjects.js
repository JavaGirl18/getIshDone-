import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import styled from 'styled-components'



const Project=styled.div`
table{
border:solid;
background-color:#4F6485;
}
`
class AllProjects extends Component {
    render() {

        const projectsList = this.props.users.projects || []


        const allProjects = projectsList.map((projects, index) => {

            let eachProject = `/users/${this.props.users._id}/projects/${projects._id}`

            return (

                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td><Link to={eachProject}>{projects.projectName}</Link> </td>
                    <td>{projects.endDate}</td>
                    <td> <button onClick={() => this.props.deleteProject(this.props.users.projects[index]._id)}>Delete Project</button></td>
                </tr>)

        })
        return (
            <Project>
                <Table hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Project Name</th>
                            <th>Due Date</th>
                            <th>Remove Project</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProjects}
                    </tbody>
                </Table>

            </Project>
        );
    }
}

export default AllProjects;