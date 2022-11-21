const { Router } = require('express');
const router = Router();
const helper = require("../helper/helper");
const axios = require("axios");

router.get("/", (req, res, next) => {
    var apiUrl = "https://dog.ceo/api/breeds/list/all";
    axios.get(apiUrl)
    .then(response => {
      var formattedMessageData = helper.formatBreedData(response.data.message);
      res.json(formattedMessageData)
    })
    .catch(err => next(err));
});

module.exports = router;
