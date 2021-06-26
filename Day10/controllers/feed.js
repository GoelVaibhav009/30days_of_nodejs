const { validationResult } = require("express-validator/check");
const Post = require('../models/post')

exports.getPosts = (req, res, next) => {
  Post.find().then(posts => {
    res.status(200).json({
      message:'Data Fetched',
      posts: posts
    })
  }).catch(err=>{
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  })
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed, entered incorrect data");
    error.statusCode = 422;
    throw error;
  }
  const title = req.body.title;
  const content = req.body.content;
  // console.log(req.file.path);
  // const imageUrl = req.file.path;
  const post = new Post({
    title: title,
    content: content,
    imageUrl: 'imageUrl',
    creator: {
      name: "Vaibhav Goel",
    },
  });
  // Create post in db
  post
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Post created successfully!",
        post: { id: new Date().toISOString(), title: title, content: content },
      })
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
