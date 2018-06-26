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
    UsersModel.findById(req.params.userId).then((user) => {
     console.log(user)
        const updatedProject = user.projects.id(req.params.id)
        updatedProject.projectName=req.body.projectName
        updatedProject.description=req.body.description
        updatedProject.startDate=req.body.startDate
        updatedProject.endDate=req.body.endDate
          return user.save().then((updatedProject)=>{
              res.send(updatedProject) 
          })
       
    })

})


//delete route
router.delete('/:id', async (req, res) => {
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
