const express = require('express')
const {v4:uuid4} = require('uuid')
const router = express.Router()

const users = []

router.get('/', (req,res) =>{
    res.send(users)
})

router.post('/', (req,res)=>{
    const user = (req.body)
    
    users.push({ ... user, id:uuid4()})
    
    res.send('POST ROUTER REACHED')
})

router.get('/:id',(req,res)=>{
  
    let element = users.filter((element) =>  {return element.id === req.params.id})

    res.send(element)
})

module.exports = router
