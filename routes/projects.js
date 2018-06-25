var express = require('express');

const router = express.Router({mergeParams: true})
const User = require('../db/usersSchema')
const Projects = require('../db/projectSchema')

const {ProjectsModel} = require('../db/projectSchema.js')
//get route
router.get('/', function(req, res, next) {
User.findById(req.params.userId).then((user)=>{
res.send({
    user: user,
    Projects: user.projects
})
})
});

//show route
router.get('/:id', async (req, res) => {
  
  ProjectsModel.findById(req.params.id)
  .then((projects)=>{
   res.send(projects)
 }) 
})

  //create route
  router.post('/', (req,res)=>{
    const userId = req.params.userId
    const newProject = new ProjectsModel(req.body)
   User.findById(userId).then((user)=>{
user.
        res.send(projects)
    })
})



//update route
router.put('/:id', async (req,res)=>{
  const userId = req.params.id
  const updatedUser = req.body
  const savedUser = await UsersModel.findByIdAndUpdate(userId, updatedUser)
  res.send(savedUser)

})

//delete route
router.put('/:id', async (req,res)=>{
  const userId = req.params.id
  
  UsersModel = await UsersModel.findByIdAndRemove(userId)
  res.send({msg: 'user deleted'})

})

module.exports = router;
