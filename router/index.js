'use strict'

const express = require('express')
//const productCtrl = require('../controllers/product')
const userCtrl = require('../controller/userController')
const postCtrl = require('../controller/postController')
const auth = require('../middlewares/auth')
const api = express.Router()

/*api.get('/product', auth, productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', auth, productCtrl.saveProduct)
api.put('/product/:productId', auth, productCtrl.updateProduct)
api.delete('/product/:productId', auth, productCtrl.deleteProduct)*/
api.delete('/:id',userCtrl.deleteUser)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/users',auth,userCtrl.getUsers)
api.post('/postnew',postCtrl.createPost)
api.get('/posts',postCtrl.getAllPosts)
api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'Tienes acceso' })
})

module.exports = api