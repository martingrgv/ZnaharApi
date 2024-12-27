const express = require('express')
const router = express.Router()

const users = 
[
    
]

router.get('/', (req, res) => {
    res.status(200).json(users)
})

router.post('/new', (req, res) => {
    req.body.name
})

.route("/:id")
    .get((req, res) => {
        res.status(200).json(req.user)
    })

router.param("id", (req, res, next, id) => {
    req.user = users[id - 1]
    next()
})

module.exports = router