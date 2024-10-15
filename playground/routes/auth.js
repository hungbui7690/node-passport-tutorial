const express = require('express')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const router = express.Router()

const users = [
  {
    id: 1,
    username: 'admin',
    password: 'admin',
  },
]

passport.use(
  new LocalStrategy(function (username, password, cb) {
    const user = users.find((u) => u.username === username)

    if (!user) return cb(null, false)
    if (user.password !== password) return cb(null, false)

    return cb(null, user)
  })
)

// 4.
passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username })
  })
})

// 5.
passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user)
  })
})

router.post(
  '/',
  passport.authenticate('local', { failureRedirect: '/dashboard' }),
  function (req, res) {
    res.redirect('/')
  }
)

// #
router.post('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err)
    }
    res.redirect('/')
  })
})

module.exports = router
