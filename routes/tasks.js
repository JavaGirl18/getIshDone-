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

//update route
router.put('/:id', async (req, res) => {
  UsersModel.findById(req.params.userId).then((user) => {
      console.log(user)
 const project = user.projects.id(req.params.projectId)
      const updatedTask = project.tasks.id(req.params.id)
      updatedTask.taskName = req.body.taskName
      updatedTask.description = req.body.description
      updatedTask.startDate = req.body.startDate
      updatedTask.dueDate = req.body.dueDate
      updatedTask.status = req.body.status
      return project.save().then((updatedTask) => {
          res.send(updatedTask)
      })

  })

})

//delete route
router.delete('/:id', async (req, res) => {
  UsersModel.findById(req.params.userId).then((user) => {
    const project = user.projects.id(req.params.projectId)
      const task = project.tasks.id(req.params.id)

      task.remove()
      return user.save()
  })
      .then((project) => {
          res.send(project)
              .catch(err => console.log((err)))
      })
})

module.exports = router;