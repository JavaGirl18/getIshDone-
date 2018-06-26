var express = require('express');
var router = express.Router();

const {UsersModel} = require('../db/usersSchema.js')
//get route
router.get('/', function(req, res, next) {
UsersModel.find().then((users)=>{
res.send(users)
})
});

//show route
router.get('/:id', async (req, res) => {
  
  UsersModel.findById(req.params.id)
  .then((users)=>{
   res.send(users)
 }) 
})

  //create route
  router.post('/', (req,res)=>{
    const newUser = new UsersModel(req.body)
    newUser.save().then((users)=>{
        res.send(users)
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
router.delete('/:id', async (req,res)=>{
  const userId = req.params.id
  
 const deletedUser = await UsersModel.findByIdAndRemove(userId)
  res.send({msg: 'user deleted'})

})

module.exports = router;
