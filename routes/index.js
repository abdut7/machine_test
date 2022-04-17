const express = require('express');
const makeController = require('../core/controller')
const {
    createProfileController,
    createCommentController,
    getCommentController,
    createLikeController
} = require("../api");
let router = express.Router();
router.post("/create_profile", makeController(createProfileController));
router.post("/create_comment", makeController(createCommentController));
router.post("/get_comment", makeController(getCommentController));
router.post("/create_like_unlike", makeController(createLikeController));
module.exports = router;