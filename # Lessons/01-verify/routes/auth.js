const express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const router = express.Router()

const users = [
  {
    username: 'admin',
    password: 'admin',
  },
]

// 1. strategy
passport.use(
  new LocalStrategy(function (username, password, cb) {
    const user = users.find((u) => u.username === username)

    if (!user) return cb(null, false)
    if (user.password !== password) return cb(null, false)

    return cb(null, user)
  })
)

// 2. use strategy
router.post(
  '/',
  passport.authenticate('local', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('/dashboard')
  }
)

module.exports = router
