const mongoose = require('mongoose');

const blogsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String, required: true, minlength: 5, maxlength: 50},
    bannerImg: {type: String, required: true},
    description: {type: String, required: true, minlength: 50, maxlength: 800},
    createdBy: {type: String, required: true},
    createdAt: {type: Date, default:  Date.now()},
    likes: {type: Number, default: 0},
    likedBy: {type: Array},
    comment: [{
        comment: {type: String, minlength: 1, maxlength: 100},
        commentatore : {type: String}
    }]
})

module.exports = mongoose.model('blogs', blogsSchema);