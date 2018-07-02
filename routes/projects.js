var express = require('express');

const router = express.Router({ mergeParams: true })
const { UsersModel } = require('../db/usersSchema')


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
            res.send(project)
        })
})

//create route
router.post('/', (req, res) => {
    UsersModel.findById(req.params.userId).then((user) => {
        const newProject = new ProjectsModel(req.body)
console.log(user)
        user.projects.push(newProject)
        user.save().then((user)=>{
            res.send(user.projects)
        })
    })

})



//update route
router.put('/:id', async (req, res) => {
    UsersModel.findById(req.params.userId).then((user) => {
        console.log(user)
        const updatedProject = user.projects.id(req.params.id)
        updatedProject.projectName = req.body.projectName
        updatedProject.description = req.body.description
        updatedProject.startDate = req.body.startDate
        updatedProject.endDate = req.body.endDate
        updatedProject.status = req.body.status
        return user.save().then((updatedProject) => {
            res.send(updatedProject)
        })

    })

})


//delete route
router.delete('/:id',(req, res) => {
    UsersModel.findById(req.params.userId).then((user) => {

        const project = user.projects.id(req.params.id)

        project.remove()
        return user.save()
    })
        .then((user) => {
            res.send(user)
                .catch(err => console.log((err)))
        })
})

module.exports = router;
