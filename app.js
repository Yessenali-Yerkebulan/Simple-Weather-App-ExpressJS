const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Almaty&appid=4db0bcb363208ddf403a9da11323059e";
    https.get(url, function(response){
        console.log(response);
    });
    res.send("Server is up and running");
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});