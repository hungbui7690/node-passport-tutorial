/*
  Username & Password Authentication
  ~~ $ npm install express-session
  ~~ $ npm install morgan


*/

require('dotenv').config()
const express = require('express')
const app = express()
const authRouter = require('./routes/auth')
const passport = require('passport') // 1.
const session = require('express-session')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// 2.
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
)
app.use(passport.authenticate('session')) // 3. routes/auth.js

app.use('/', authRouter)
app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + '/public/dashboard.html')
})

app.listen(5000, () => console.log('🚀 Listening on port 5000...'))
