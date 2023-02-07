const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const https = require("https");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get('/', function(req, res){
    res.sendFile(__dirname + "/views/index.html")
})


app.post('/', function(req, res){
    let query = req.body.operation
    console.log(query)
    let url = "https://api.mathjs.org/v4/?" + "expr=" + encodeURIComponent(query)    
    console.log(url)
    https.get(url, function (response) {
        response.on("data", function (data) {
          let answer = JSON.parse(data);
          document.body.querySelector("input").value = query + answer
        });
      });    
})

app.listen(3000, function(req, res){
    (console.log("Server is running on port 3000!"))
})



