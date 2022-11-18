const express = require("express");
const axios = require("axios");

const PORT = process.env.PORT || 3001;

const app = express();
const API = "https://dog.ceo/api/breeds"

app.get("/random", (req, res, next) => { 
  axios.get(API + "/image/random")
   //parse response and add breed to the return
  .then(response => res.json(response.data))
  .catch(err => next(err));
});


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  })
  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
