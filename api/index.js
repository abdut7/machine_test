const {
    createProfileController
} = require('./controller/profileController');
const {
    createCommentController,
    getCommentController
} = require('./controller/commentController')
const {createLikeController} = require('./controller/likeController')
module.exports = {
    createProfileController,
    createCommentController,
    getCommentController,
    createLikeController
}