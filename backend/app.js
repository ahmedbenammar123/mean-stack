///**************Inportation des module **************************/
//import express module
const express = require('express');
//inport bady-parser module/
const bodyParser = require('body-parser');
//inport mongoose module/install
const mongoose = require('mongoose');
//inport bcrypt module/install
const bcrypt = require('bcrypt');
// team api
var request = require('request');

///**************Creation de l'application **************************/
// create express application
const app = express();
///**************Configuration de l'application **************************/
//configure app by BodyParser to send Response (json)
app.use(bodyParser.json());
//configure app by BodyParser to parse object 
app.use(bodyParser.urlencoded({ extended: true }))
// Security Configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

///////////////////////////get all popular movies API////////////////////////////
app.post("/movies/popular", (req, res) => {
    const apikey='15e383204c1b8a09dbfaaa4c01ed7e17'; 
    var options = { 
      url: `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=${req.body.page}`
    };
    function callback(error, response, body) {
       // console.log(body);
        let data =JSON.parse(body);
        console.log("json data",data);
        res.json({ resp:data });
    }
    
    request(options, callback);
   });
///////////////////////////get all newplaying movies API////////////////////////////
app.post("/movies/topRated", (req, res) => {
    const apikey='15e383204c1b8a09dbfaaa4c01ed7e17'; 
    var options = { 
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=${req.body.page}`
    };
    function callback(error, response, body) { 
        console.log("ben ammar",body);
        let data =JSON.parse(body);
        console.log("json data",data);
        res.json({ resp:data });
    }
    
    request(options, callback);
   });
///////////////////////////get all newplaying movies API////////////////////////////
app.post("/movies/newPlaying", (req, res) => {
  console.log("bouha",req.body.page);
    const apikey='15e383204c1b8a09dbfaaa4c01ed7e17'; 
    var options = { 
      url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=${req.body.page}`
    };
    function callback(error, response, body) {
        // console.log(body);
        let data =JSON.parse(body);
        console.log("json data",data);
        res.json({ resp:data });
    }
    
    request(options, callback);
   });
///////////////////////////get all upComing movies API////////////////////////////
app.post("/movies/upComing", (req, res) => {
  console.log("bouha",req.body.page);
    const apikey='15e383204c1b8a09dbfaaa4c01ed7e17'; 
    var options = { 
      url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=${req.body.page}`
    };
    function callback(error, response, body) {
        // console.log("ben ammar",body);
        let data =JSON.parse(body);
        console.log("json data",data);
        res.json({ resp:data });
    }
    
    request(options, callback);
   });
///////////////////////////get movies by id API////////////////////////////
app.get("/movies/:id", (req, res) => {
    const apikey='15e383204c1b8a09dbfaaa4c01ed7e17'; 
    var options = { 
      url: `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${apikey}&language=en-US`
    };
    function callback(error, response, body) {
        // console.log(body);
        let data =JSON.parse(body);
       console.log("json data",data);
        res.json({ movie:data });
    }
    
    request(options, callback);
   });

///**************Exportation de l'application **************************/
// app imprtable form another files 
module.exports = app;