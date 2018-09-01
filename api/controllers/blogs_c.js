const mongoose = require('mongoose');
const blogsModel = require('./../models/blogs_m')

// get blogs
exports.getBlogs = (req, res, next) => {
    blogsModel.find()
    .exec()
    .then(docs => {
        const responce = {
            count: docs.length,
            blogs: docs.map(doc => {
                return {
                    _id: doc._id,
                    title : doc.title,
                    description: doc.description,
                    image: 'http://localhost:3000/' + doc.img,
                    created_at: doc.created_at
                }
            })
        }
        res.status(200).json(responce);
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        })
    })
}
// get blogs

// create blog
exports.createBlog = (req, res, next) => {
    const blog = new blogsModel({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description,
        created_at: Date.now(),
        img: req.file.path,
    });
    blog.save()
    .then(result => {
        res.status(201).json({
            message: "blog created."
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            mgs: err
        })
    })
}
// create blog

// get blog
exports.getBlog = (req, res, next) => {
    const id = req.params.blogId;
    blogsModel.findById(id)
    .exec()
    .then(result => {
        res.status(201).json({
            message: "get single blog",
            blog: {
                _id: result._id,
                title: result.title,
                description: result.description,
                image: 'http://localhost:3000/' + result.img,
                created_at: result.created_at,
                likes: result.likes,
                views: result.views
            }
        })
    })
    .catch(err => {
        res.status(404).json({
            error: err
        })
    })
}
// get blog


