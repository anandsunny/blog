const mongoose = require('mongoose');
const blogsModel = require('./../models/blogs_m')

// get blogs
exports.getBlogs = (req, res, next) => {

    blogsModel.find()
        .exec()
        .then((docs) => {
            res.json({
                success: true,
                message: 'get all blogs',
                count: docs.length,
                blogs: docs
            })
        })
        .catch(err => {
            res.json({
                success: false,
                message: 'get all blogs error',
                errors: err
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
        createdAt: Date.now(),
        bannerImg: 'http://localhost:3000/' + req.file.path,
        createdBy: req.body.createdBy
    });
    console.log(req.file);
    blog.save()
        .then(result => {
            res.json({
                success: true,
                message: 'blog created',
                blog: result
            })
        })
        .catch(err => {
            let message = '';
            if (err.errors) {

                if (err.errors.title)
                    message = err.errors.title.message
                else if (err.errors.description)
                    message = err.errors.description.message
                else if (err.errors.createdAt)
                    message = err.errors.createdAt.message
                else if (err.errors.createdBy)
                    message = err.errors.createdBy.message
                else
                    message = 'there are some errors'

            }
            res.json({
                success: false,
                message: message,
                error: err
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
            success: true,
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
            success: false,
            error: err
        })
    })
}
// get blog





