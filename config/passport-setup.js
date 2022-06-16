const passport = require('passport')
const keys = require('./keys')
const User = require('../modules/user-module.js')

const GoogleStrategy = require('passport-google-oauth20')

passport.use(new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret
},
(accessToken, refreshToken, profile, done) => {
    console.log('callback is fired')
    new User({
        username: profile.displayName,
        googleID: profile.id
    }).save().then((newUser) => {
        console.log('new user created', newUser)
    })
  
}))