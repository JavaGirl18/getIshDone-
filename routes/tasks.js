var express = require('express');
const router = express.Router({mergeParams: true})


const UserModel = require('../db/usersSchema')
const ProjectsModel = require('../db/projectSchema')

const {TasksModel} = require('../db/tasksSchema.js')
//get route
router.get('/', function(req, res, next) {
  ProjectsModel.findById(req.params.projectId).then((project)=>{
const tasks = projects.tasks.id(req.params.id)
  })
res.send(projects.tasks)
});


//create

// CREATE Route
router.post('/', (req, res) => {
    const userId = req.params.userId
    const projectId = req.params.projectId
       const tasks = new TasksModel(req.body)
       User.findById(userId)
         .then((user) => {
           //take that same user, grab the financial goals from goals schema by id and push new comment
           user.projects.id(projectId).tasks.push(tasks)
           return user.save()
   
         })
         .then(() => {
     
           // redirect to goals page
           res.redirect(`/users/${req.params.userId}/finGoals`)
         })
     })

module.exports = router;