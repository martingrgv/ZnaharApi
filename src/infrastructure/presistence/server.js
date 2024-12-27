const express = require('express')
const app = express()

// Middleware
app.use(express.json())
// app.use(express.static('public'))
// app.use(express.urlencoded)
app.use(logger)

// Routes
app.get('/api', (req, res) => {
    res.status(200).json({ message: "Success" })
});

const userRouter = require('../routes/users')
app.use('/api/users', userRouter)


function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`)
})
