require('dotenv').config()

const mongosee = require('mongoose')

const express = require('express')
const morgan = require('morgan')
const server = express()

const mainRouter = require('./src/routers')

const logger = morgan(':method :url :status :res[content-length] - :response-time ms')

const port = process.env.PORT || 8000

server.listen(port, ()=> {
    console.log('server aktif')
})

mongosee.connect(process.env.db+'/sos-fomt-progress')
const db = mongosee.connection

db.on('error', console.error.bind(console, 'Database error'))
db.once('open', ()=> {
    console.log('database aktif')
})

server.use(express.urlencoded({extended:true}))
server.use(logger)
server.use(express.json())
server.use(mainRouter)