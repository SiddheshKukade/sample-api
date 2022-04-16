var express = require("express");
var app = express();
  
 const thirdFunction=  (req, res, next) => {
        res.json(["third","qweer","sdfsdfsf","Ginger","Food"]);
};
module.exports = thirdFunction;
