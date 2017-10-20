'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const morgan = require('morgan')
const app = express()

//const hbs = require('express-handlebars') // Motor de plantillas
const api = require('./router')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
/*app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname: '.hbs'
}))*/
//app.set('view engine', '.hbs')
app.use('/',api)
//app.use(express.static(__dirname + '/public/dist'));
console.log(__dirname)
app.use(express.static(path.join(__dirname,'/public/dist')));

/*app.use('/login',(req,res)=>{
	res.render('login')
})*/
/*app.get('/login', (req, res) => {
  res.render('login')
})*/

/*app.get('/', (req, res) => {
  res.render('blogs')
})*/

module.exports = app