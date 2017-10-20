'use strict'

const User = require('../modelos/users')
//const service = require('../services')

function signUp (req, res) {
  console.log('Erro de reacion')
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  })

  user.save((err, userS) => {
    if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })

    return res.status(201).send({ user:userS })
  })
}

function signIn (req, res) {
  User.find({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).send({ message: err })
    if (!user) return res.status(404).send({ message: 'No existe el usuario' })

    req.user = user
    res.status(200).send({
      message: 'Te has logueado correctamente',
      //token: service.createToken(user)
    })
  })
}

function deleteUser (req, res) {
  let id = req.params.id

  User.findById(id, (err,user) => {
    if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})

    user.remove(err => {
      if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})
      res.status(200).send({message: 'El producto ha sido eliminado'})
    })
  })
}

function getUsers (req, res) {
  User.find({}, (err, user) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!user) return res.status(404).send({message: 'No existen productos'})

    res.status(200).send(user)
  })
}

module.exports = {
  signUp,
  signIn,
  getUsers,
  deleteUser
}