const mongoose = require('mongoose');

const blogsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String},
    description: {type: String},
    img: {type: String, required: true},
    created_at: {type: Date},
    views: {type: Number, default: 0},
    likes: {type: Number, default: 0}
})

module.exports = mongoose.model('blogs', blogsSchema);