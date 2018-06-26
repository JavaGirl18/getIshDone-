var express = require('express');

const router = express.Router({ mergeParams: true })
const {UsersModel} = require('../db/usersSchema')


const { ProjectsModel } = require('../db/projectSchema.js')
//get route
router.get('/', function (req, res, next) {
   UsersModel.findById(req.params.userId).then((user) => {
        res.send(user.projects)
    })
});

//show route
router.get('/:id', async (req, res) => {

    UsersModel.findById(req.params.userId)

        .then((user) => {
            const project = user.projects.id(req.params.id)
            res.send(user.projects)
        })
})

//create route
router.post('/new', (req, res) => {
    const newProject = new ProjectsModel(req.body)
    newProject.save().then((project) => {
        res.send(project)
    })
})



//update route
router.put('/:id', async (req, res) => {
            const projectId = req.params.id
            const updatedProject = req.body
            const savedProject = await ProjectsModel.findByIdAndUpdate(projectId, updatedProject)
            res.send(savedProject)

        })

//delete route
router.delete('/:id', async (req, res) => {
            const projectId = req.params.id

            const deletedProject = await ProjectsModel.findByIdAndRemove(projectId)
            res.send({ msg: 'project deleted' })

        })

module.exports = router;
