const express = require('express')

const authRoutes = require('./routes/auth-routes.js')

const passportSetup = require('./config/passport-setup.js')

const mongoose = require('mongoose')

const keys = require('./config/keys.js')



const app = express()

mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('database connected')
})

app.use('/auth', authRoutes)

app.set('view engine', 'ejs')

app.get('/', (req, res) =>  {
    res.render('home')
})

app.get('/about', (req, res) =>  {
    res.render('about')
})

app.listen(8080, () => {
    console.log('listening at 8080')
})