/*
  Username & Password Authentication
  - setup Passport Authentication


****************************

  ~~ $ npm install passport
  ~~ $ npm install passport-local


****************************

  1. app.js
  2. routes/auth.js
  3. public/index.html


  🚀 After login -> the app fails with an error related to sessions -> fix in next lesson


*/

require('dotenv').config()
const express = require('express')
const app = express()
const authRouter = require('./routes/auth')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/', authRouter)
app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + '/public/dashboard.html')
})

app.listen(5000, () => console.log('🚀 Listening on port 5000...'))
