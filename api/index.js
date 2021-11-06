
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import jwt from 'express-jwt'
const login = require('./routes/login')
// const students = require('./routes/students')
const app = express()
 
app.use(cookieParser())
app.use(bodyParser.json())

// JWT middleware
app.use(
  jwt({
    secret: 'dummy',
    algorithms: ['sha1', 'RS256', 'HS256']
  }).unless({
    path: ['/api/auth/login', '/api/auth/refresh']
  })
)
app.use(login)
// app.use(students);
  

// Error handler
app.use((err, _req, res) => {
  console.log('error główny');
  // console.error(err) // eslint-disable-line no-console
  // console.log(err) // eslint-disable-line no-console
  // res.status(401).send(err + '')
})

// -- export app --
export default {
  path: '/api/auth',
  handler: app
}

// module.exports = app