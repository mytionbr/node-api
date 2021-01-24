const {v4:uuid4} = require('uuid')

let users = []

const createUser = (req,res) => {
    const user = req.body

    users.push({... user, id: uuid4()})

    res.send('POST ROUTER REACHED') 
}

const getUsers = (req,res)=>{
    res.send(users)
}

const getUser = (req,res)=>{
    const {id} = req.params
    let foundUser = users.find(element => element.id === req.params.id)

    res.send(foundUser)
}

const deleteUser = (req,res)=>{
    const {id} = req.params

    users = users.filter((user)=> user.id === id)

    res.send(`deleted user: ${id}`)
}

const patchUser = (req,res)=>{
    const {id} = req.params
    const {firstName, lastName, age} = req.body
    const user = users.find((user)=>user.id ===id)

    if(firstName) user.firstName = firstName
    if(lastName) user.lastName = lastName
    if(age) user.age = age

    res.send(`The user with the id ${user.id} has been updated`   )

}

module.exports = {createUser,getUsers,getUser,deleteUser,patchUser}