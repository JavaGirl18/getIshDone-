
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const {UsersModel}  = require ('./usersSchema')
const {ProjectsModel}  = require ('./projectSchema')
const {TasksModel}  = require ('./tasksSchema')
const {CommentModel}  = require ('./commentSchema')

const project1 = new ProjectsModel({
    description: 'complete project 3',
    startDate: new Date(2018, 6, 25),
    endDate: new Date(2018, 7, 02),
    tasks:[task1],
    
})

const project2 = new ProjectsModel({
    description: 'create a PM app',
    startDate: new Date(2018, 9, 15),
    endDate: new Date(2018, 10, 15),
    tasks:[task2],
  
})

const project3 = new ProjectsModel({
    description: 'create a chat bot',
    startDate: new Date(2018, 8, 15),
    endDate: new Date(2018, 9, 15),
    tasks:[task3],
    teamMembers:[user1, user2]
})

const task1 = new TasksModel({
    description:"create ERD",
    status:"In progress",
    dueDate: Date,
    comments:[comments]
})
const task2 = new TasksModel({
    
})
const task3 = new TasksModel({
    
})


const user1 = new UserModel({
    name: 'Valencia Cooper',
    email: 'valenciacooper89@gmail.com',
    role: String,
    projects:[]
})

const 


