const express = require('express')
const path = require('path')
const app = express()

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '27958146dcf142b2a6b34ead2a27e05e',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello!')

rollbar.info('Students List Requested')
    rollbar.error('stuff is going wrong')
    rollbar.critical('everything is on fire')
    rollbar.warning('jk')
    res.status(200).send(students)

try {blah()}
catch (error) {
    rollbar.error(error)
}

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/css',(req,res) => {
  res.sendFile(path.join(__dirname, '../styles.css'))
})

app.get('/js', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.js'))
})

const port = process.env.PORT || 4005

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

try {blah()}
catch (error) {
    rollbar.error(error)
    rollbar.info('Students List Requested')
    rollbar.warning('stuff is going wrong')
    rollbar.critical('everything is on fire')
}