const express =require('express');
const makeController = require('../controllers/core/controller')
const {createProfileController} = require("../controllers/profile");
let router = express.Router();
router.post("/create_profile", makeController(createProfileController));
module.exports = router;