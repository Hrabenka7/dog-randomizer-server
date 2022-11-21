const { Router } = require('express');
const router = Router();
const helper = require("../helper/helper");
const axios = require("axios");

router.get("/", (req, res, next) => {
    var apiUrl = "https://dog.ceo/api/breeds/image/random";
    axios.get(apiUrl)
    .then(response => {
      var formattedResponse = helper.formatParamsResponse(response)
      res.json(formattedResponse)
    })
    .catch(err => next(err));
})


module.exports = router;