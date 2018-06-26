
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const { UsersModel } = require('./usersSchema')
const { ProjectsModel } = require('./projectSchema')
const { TasksModel } = require('./tasksSchema')
const { CommentModel } = require('./commentSchema')



// Connect to Database
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('connected to mongoDB')
    })
    .catch((err) => {
        console.log('ERROR', err)
    })


const comment1 = new CommentModel({
    description: 'ERD approve by Jamie'
})
const comment2 = new CommentModel({
    description: 'updated wire frame'
})
const comment3 = new CommentModel({
    description: 'research stored in database'
})



const task1 = new TasksModel({
    taskName: 'create ERD',
    description: "get approvals, use sketch",
    status: "In progress",
    startDate: new Date(2018, 9, 15),
    dueDate: new Date(2018, 9, 20),
    // comments: [comment1]
})
const task2 = new TasksModel({
    taskName: 'make wire frames',
    description: "use materal design",
    status: "Delayed",
    startDate: new Date(2018, 9, 15),
    dueDate: new Date(2018, 9, 15),
    // comments: [comment2]
})
const task3 = new TasksModel({
    taskName: 'conduct research',
    description: "duns and bradstreet was awesome",
    status: "Complete",
    startDate: new Date(2018, 9, 15),
    dueDate: new Date(2018, 9, 20),
    // comments: [comment3]
})


const project1 = new ProjectsModel({
    projectName: 'Project3',
    description: 'complete project 3',
    startDate: new Date(2018, 6, 25),
    endDate: new Date(2018, 7, 02),
    tasks: [task1],

})

const project2 = new ProjectsModel({
    projectName: 'PM app',
    description: 'create a PM app',
    startDate: new Date(2018, 9, 15),
    endDate: new Date(2018, 10, 15),
    tasks: [task2]

})

const project3 = new ProjectsModel({
    projectName: 'Chat Bot app',
    description: 'create a chat bot',
    startDate: new Date(2018, 8, 15),
    endDate: new Date(2018, 9, 15),
    tasks: [task3]

})



const user1 = new UsersModel({
    name: 'Valencia Cooper',
    email: 'valenciacooper89@gmail.com',
    role: 'Project Owner',
    projects: [project1]
})

const user2 = new UsersModel({
    name: 'Ayana Redd',
    email: 'aredd@gmail.com',
    role: 'team member',
    projects: [project2]
})

const user3 = new UsersModel({
    name: 'Jada Pinkett-Smith',
    email: 'Jada@gmail.com',
    role: 'team member',
    projects: [project3]
})

const projects = [project1, project2, project3]
const users = [user1, user2, user3]
const tasks = [task1, task2, task3]


// Remove old User Data
UsersModel.remove()
    .then(() => ProjectsModel.remove())
    .then(() => TasksModel.remove())
    .then(() => CommentModel.remove())
    .then(() => UsersModel.insertMany(users))
    .then(() => TasksModel.insertMany(tasks))
    .then(() => ProjectsModel.insertMany(projects))
    .then(() => mongoose.connection.close())



    //     // save test data
    //     return ProjectsModel.findOne({ projectName: 'Chat Bot' }).populate(user1)
    // })
    // .then(() => {
    //     project1.teamMembers.push(user1)
    //     project2.teamMembers.push(user2)
    //     project3.teamMembers.push(user3)
    //     console.log("database created!")
    //     // close the database
    //     mongoose.connection.close()
    // }).catch((err) => {
    //     console.log('ERROR', err)
    // })