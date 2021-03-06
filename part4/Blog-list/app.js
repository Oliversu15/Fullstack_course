require('express-async-errors')
const express = require('express')
const app = express()
const cors = require('cors')
const blogRouter = require('./controllers/router')
const config = require('./utils/config')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const userRouter = require('./controllers/user_router')
const loginRouter = require('./controllers/login')
const middleware = require('./utils/middleware')


mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false})
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connection to MongoDB:', error.message)
    })

app.use(cors())
app.use(express.json())
app.use(middleware.tokenExtractor)
app.use('/api/blogs', blogRouter)
app.use('/api/users',userRouter)
app.use('/api/login', loginRouter)


app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)



module.exports = app