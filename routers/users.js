const express = require('express')
const {v4:uuid4} = require('uuid')
const router = express.Router()

let users = []

router.get('/', (req,res) =>{
    res.send(users)
})

router.post('/', (req,res)=>{
    const user = (req.body)
    
    users.push({ ... user, id:uuid4()})
    
    res.send('POST ROUTER REACHED')
})

router.get('/:id',(req,res)=>{
    const {id} = req.params
    let foundUser = users.find(element => element.id === req.params.id)

    res.send(foundUser)
})

router.delete('/:id', (req,res)=>{
    const {id} = req.params

    users = users.filter((user)=> user.id === id)

    res.send(`deleted user: ${id}`)
})

router.patch('/:id', (req,res)=>{
    const {id} = req.params
    const {firstName, lastName, age} = req.body
    const user = users.find((user)=>user.id ===id)

    if(firstName) user.firstName = firstName
    if(lastName) user.lastName = lastName
    if(age) user.age = age

    res.send(`The user with the id ${user.id} has been updated`   )

})

module.exports = router
