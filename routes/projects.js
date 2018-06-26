var express = require('express');

const router = express.Router({ mergeParams: true })
const User = require('../db/usersSchema')
const Projects = require('../db/projectSchema')

const { ProjectsModel } = require('../db/projectSchema.js')
//get route
router.get('/', function (req, res, next) {
    User.findById(req.params.userId).then((user) => {
        res.send({
            user: user,
            Projects: user.projects
        })
    })
});

//show route
router.get('/:id', async (req, res) => {

    ProjectsModel.findById(req.params.id)
        .then((projects) => {
            res.send(projects)
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
router.put('/:id', async (req, res) => {
            const userId = req.params.id

            UsersModel = await UsersModel.findByIdAndRemove(userId)
            res.send({ msg: 'user deleted' })

        })

module.exports = router;
