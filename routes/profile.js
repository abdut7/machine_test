'use strict';

const express = require('express');
const router = express.Router();
const getMongoDb = require('../controllers/core/getMongoDbClient')

const profiles = [{
  "id": 1,
  "name": "A Martinez",
  "description": "Adolph Larrue Martinez III.",
  "mbti": "ISFJ",
  "enneagram": "9w3",
  "variant": "sp/so",
  "tritype": 725,
  "socionics": "SEE",
  "sloan": "RCOEN",
  "psyche": "FEVL",
  "image": "https://soulverse.boo.world/images/1.png",
}];

module.exports = function () {

  router.get('/*', async function (req, res, next) {
    let profile, list = []
    const DB = await getMongoDb();
    const result = await DB.collection("profile").find({});
     await result.forEach(item => {
      profile = item;
      list.push(item);
    });
    res.render('profile_template', {
      profile: profile || profiles[0],
      list
    });
  });

  return router;
}