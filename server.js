const express       = require('express')
const mongoose      = require('mongoose')
const bodyParser    = require('body-parser')
const path          = require('path')

const connectDB     = require('./config/db')
const auth          = require('./routes/api/auth')
const users         = require('./routes/api/users')
const articles      = require('./routes/api/articles')
const upload        = require('./routes/api/upload')
const admin         = require('./routes/api/admin')

const app           = express()
const PORT          = process.env.PORT || 5000


connectDB()


//app.use(bodyParser.json())
app.use(express.json({ extended: false }))

// app.get('/', (req, res) => {
//     res.json({ msg: 'welcome to the pip-producer'})
// })


/* API */
app.use('/api/auth', auth)
app.use('/api/users', users)
app.use('/api/articles', articles)
app.use('/api/upload', upload)
app.use('/api/admin', admin)

// AWS Ubuntu 18.04 AND OTHERS
// ***CANNOT USE
app.use(express.static(path.join(__dirname, 'client', 'build')))

// Heroku
/*** serve static assets in production ***/
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './client/build')))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}
// console.log('ENVIRONMENT',process.env.NODE_ENV);

/* LISTENING */
app.listen(PORT, () => console.log(`\nServer started on PORT ${PORT}`))
