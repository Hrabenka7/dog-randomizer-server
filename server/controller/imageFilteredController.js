const { Router } = require('express');
const router = Router();
const helper = require("../helper/helper");
const axios = require("axios");

router.get("/", (req, res, next) => {
    var breed = req.query.breed;
    var subBreed = req.query.subBread;
    
    if(subBreed) {
        axios.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`)
        .then(response => {
        var formattedResponse = helper.formatParamsResponse(response)
        res.json(formattedResponse)
        })
        .catch(err => next(err));
    }
    else if (breed) {
        axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => {
        var formattedResponse = helper.formatParamsResponse(response)
        res.json(formattedResponse)
        })
        .catch(err => next(err));
    }
});

module.exports = router;