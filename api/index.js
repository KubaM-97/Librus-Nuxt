import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import jwt from 'express-jwt'
const login = require('./routes/login')
const students = require('./routes/students')
const app = express()

app.use(cookieParser())
app.use(bodyParser.json())

app.use(
  jwt({
    secret: 'dummy',
    algorithms: ['sha1', 'RS256', 'HS256']
  }).unless({
    path: ['/api/login', '/api/refresh']
  })
)

app.use(login)
app.use(students)

app.use((err, _req, res) => {
  console.error('błąd główny', err.response, err.data) // eslint-disable-line no-console
  // console.error(err) // eslint-disable-line no-console
  // res.sendStatus(401).send(err + '')
})

export default {
  path: '/api',
  handler: app
}