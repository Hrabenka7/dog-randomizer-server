const express = require("express");
const axios = require("axios");

const PORT = process.env.PORT || 3001;

const app = express();
const API = "https://dog.ceo/api/breeds"

app.get("/random", (req, res, next) => { 
  axios.get(API + "/image/random")
  .then(response => {
    var partsURL = response.data.message.split("/");
    var breedObject = {breed: partsURL[partsURL.length -2]}
    var object = { ...response.data, ...breedObject }
    res.json(object)
  })
  .catch(err => next(err));
});


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  })
  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
