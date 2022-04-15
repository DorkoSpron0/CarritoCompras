const express = require("express");
const morgan = require("morgan");
const app = express()
const path = require('path')
require('./database')

//SETTINGS
app.set('port', process.env.PORT || 8000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(morgan('dev'))
app.use(require('./routes/index.routes'))

app.listen(app.get('port'), () => {
    console.log('Server Started')
})