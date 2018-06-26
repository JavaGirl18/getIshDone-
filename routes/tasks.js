var express = require('express');
const router = express.Router({ mergeParams: true })


const { UsersModel } = require('../db/usersSchema')
const { ProjectsModel } = require('../db/projectSchema')

const { TasksModel } = require('../db/tasksSchema.js')
//get route
router.get('/', function (req, res, next) {
  UsersModel.findById(req.params.userId)
    .then((user) => {

      res.send(user.projects.id(req.params.projectId).tasks)
    })

});

//show route
router.get('/:id', async (req, res) => {

  UsersModel.findById(req.params.userId)

    .then((user) => {
      const project = user.projects.id(req.params.projectId)
      const task = project.tasks.id(req.params.id)
      // console.log(task)
      res.send(task)
    })
})

//create

// CREATE Route
router.post('/', (req, res) => {
  UsersModel.findById(req.params.userId).then((user) => {
    const project = user.projects.id(req.params.projectId)
    const newTask = new TasksModel(req.body)


    console.log(project)
    project.tasks.push(newTask)
    user.save().then(() => {
      res.send(newTask)
    })

  })
})

module.exports = router;