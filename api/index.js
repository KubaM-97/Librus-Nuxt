  
const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
// const rootRouter = require('./routes')

// app.use('/api', rootRouter)
const users = require('./routes/users')
app.use(users);
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port: ${port}`)
  })
}