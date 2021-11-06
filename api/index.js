  
const express = require('express')
const cookieParser = require('cookie-parser')
const jwt = require('express-jwt')
const app = express()

// JWT middleware
app.use(
  jwt({
    secret: 'dummy',
    algorithms: ['sha1', 'RS256', 'HS256']
  }).unless({
    path: ['/api/users']
  })
)
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const users = require('./routes/users')
const students = require('./routes/students')
app.use(users);
app.use(students);
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port: ${port}`)
  })
}