//express framework used to implement
//server funtionality easier
const express = require("express");
const app = express();

//CORS = Cross-Origin Resource Sharing
//used to allow http requests to other domains
//allows other "origins" to access and load resources
const cors = require("cors");

//testing if app is returning message to local port 4000
app.get("/", (req, res) => {
    return res.json("Hello world");
})

app.listen(4000, () => console.log("Listening to port 4000"));