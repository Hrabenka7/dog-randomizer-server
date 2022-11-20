const express = require("express");
const axios = require("axios");

const PORT = process.env.PORT || 3001;

const app = express();
const API = "https://dog.ceo/api/breeds"

app.get("/random", (req, res, next) => { 
  axios.get(API + "/image/random")
  .then(response => {
    // Enable line below to test favorite
    // response.data.message = "https://images.dog.ceo/breeds/newfoundland/n02111277_6891.jpg";
    
    var partsURL = response.data.message.split("/");
    var breedObject = {breed: partsURL[partsURL.length -2]}
    var imageNameObject = {imageName: partsURL[partsURL.length -1]}
    var object = { ...response.data, ...breedObject, ...imageNameObject }
    res.json(object)
  })
  .catch(err => next(err));
});

app.get("/allBreeds", (req, res, next) => {
  axios.get(API + "/list/all")
  .then(response => {
    var formattedMessageData = formatBreedData(response.data.message);
    res.json(formattedMessageData)
  })
  .catch(err => next(err));
});
  
app.get("/breed/param", (req, res, next) => {
  var breed = req.query.breed; 
  axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
  .then(response => {
    var partsURL = response.data.message.split("/");
    var breedObject = {breed: breed}
    var imageNameObject = {imageName: partsURL[partsURL.length -1]}
    var object = { ...response.data, ...breedObject, ...imageNameObject }
    res.json(object)
  })
  .catch(err => next(err));
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

function formatBreedData(apiResponseData)
{  
  var breedData = [];
  for (var breedName in apiResponseData) {
    var subBreeds = apiResponseData[breedName];
    breedData.push ({
      "breedName": breedName,
      "subBreeds": subBreeds
    });
  }
  return breedData;

}