'use strict'
const Post = require('../modelos/posts')
// get all posts
function getAllPosts(req, res) {
  Post.find({}, (err, posts) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!posts) return res.status(404).send({message: 'No existen productos'})

    res.status(200).send(posts)
  })
}

// get one post by id
/*export function getPostById(req, res, next) {
  const id = req.params.id;

  Post.findById(id)
  .then((posts) => {
    res.status(200).json({ posts });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}
*/
// create post
function createPost(req, res) {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  })
  post.save((err, post) => {
    if (err) return res.status(500).send({ message: `Error al crear el post: ${err}` })

    return res.status(201).send({ post:post})
  })
}


// update post by id
/*export function updatePost(req, res, next) {
  const id = req.params.id;

  Post.findByIdAndUpdate(id, req.body)
  .then((post) => {
    res.status(200).json({ post });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}


// delete post by id
export function deletePost(req, res, next) {
  const id = req.params.id;

  Post.findByIdAndRemove(id)
  .then((post) => {
    res.status(204).json({ post });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}*/

module.exports = {
  getAllPosts,
  createPost
}