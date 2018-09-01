const express = require('express');
const router = express.Router();
const blogsController = require('./../controllers/blogs_c');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cd) {
        cd(null, 'uploads/blogs/images/');
    },
    filename: function(req, file, cd) {
        cd(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

const fileFilter = (req, file, cd) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);

    if(mimeType && extName) {
        return cd(null, true);
    } else {
        cd('Error: image only');
    }
}

const uploads = multer({
    storage: storage,
    limits: { fileSize : 1024 * 1024 * 5 },
    fileFilter: fileFilter
})

// get blogs
router.get('/', blogsController.getBlogs);

// create blog
router.post('/', uploads.single('img'), blogsController.createBlog );

// get blog
router.get('/:blogId', blogsController.getBlog);
// get blog



module.exports = router;