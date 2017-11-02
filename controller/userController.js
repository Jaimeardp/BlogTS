'use strict'

const User = require('../modelos/users')
const service = require('../services')

function signUp (req, res) {
  //console.log('Erro de reacion')
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    role: req.body.role
  })

  /*user.save((err, userS) => {
    if (err){
      return res.status(500).send({ message: `Error al crear el usuario: ${err}` })
    }
    return res.status(201).send({ user:userS })
  })*/
  user.save((err) => {
    if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })

    return res.status(201).send({ token: service.createToken(user) })
  })
}

/*function signIn (req, res) {
  console.log("Cansado Papu")
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) return res.status(500).send({ message: err })
    if (!user) return res.status(404).send({ message: 'No existe el usuario' })

    req.user = user
    res.status(200).send({
      message: 'Te has logueado correctamente',
      token: service.createToken(user),
    })
  })
}*/

function signIn(req, res){
    // find the user
    console.log("Cansado Papu")
    User.findOne({ username: req.body.username },( err, user) => {
    if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }
    if (!user) {
      console.log(user)
      res.status(201).json({ success: false, message: 'Incorrect login credentials.' });
    }else if (user) {
      console.log("2 NIVEL")
      console.log(user)
      console.log(req.body.password)
          user.comparePassword(req.body.password,(err, isMatch)=> {
              if (isMatch && !err) {
                console.log("Login correcto")
                    res.status(200).send({
                      message:'Te has logueado correctamente',
                      token: service.createToken(user)
                    })
              }
            })
        }
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
  //res.json(user)
  })
}

module.exports = {
  signUp,
  signIn,
  getUsers,
  deleteUser
}