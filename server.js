const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded)
app.use(logger)

app.get('/api', (req, res) => {
    res.status(200).json({ message: "Success" })
});

const userRouter = require('./routes/users')

app.use('/api/users', userRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)
