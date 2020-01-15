const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var userWeight = Number(req.body.weight);
  var userHeight = Number(req.body.height);

  var bmiScore = Math.floor(userWeight/(userHeight*userHeight));

  res.send("Your BMI is "+ bmiScore);
});
//what happen when users get into the html page.
app.get("/", function (req, res){
  res.sendFile(__dirname+ "/index.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
  res.send("The result is "+result);
});

app.listen(3000, function(){
  console.log("server is running on port 3000");
});
