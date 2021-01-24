const express = require('express')

const {createUser,getUsers,getUser,deleteUser,patchUser} = require('../controllers/users')
const router = express.Router()



router.get('/', getUsers)


router.post('/', createUser)

router.get('/:id',getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', patchUser)

module.exports = router
