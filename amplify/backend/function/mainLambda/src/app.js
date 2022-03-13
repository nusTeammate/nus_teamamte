/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const mongoose = require('mongoose')
const Projects = require('./models/projects')
/*const Users = require('./models/user')
const passport = require('passport')
const LocalStrategy = require('passport-local');*/

const dbUrl ='mongodb://localhost:27017/test'      //'mongodb+srv://MagicBox:MagicBox@cluster0.r926u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' // ||        //process.env.DB_URL ||         //deploy version
mongoose.connect(dbUrl, {
   
});
mongoose.connection.on("error", console.error.bind(console, "connection error:"))
mongoose.connection.once("open", () => {
    console.log("Datebase connected")
})

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(awsServerlessExpressMiddleware.eventContext())
app.use(cors())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

/*app.use(passport.initialize)
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))*/


app.get('/test', async function(req,res){
  const people = [{name: 'Nader'}, {name: 'Jennifer'}]
  try{
    const project = new Projects({name:"hello world!", email:"ahhaah", password:"12345"})
    console.log('hello3')
    await project.save();
    const projects = await Projects.find({});
  
    console.log(projects)
    res.send(JSON.stringify(projects))
  }catch(e){
    console.log(e)
  }
})

app.post('/test', async function(req, res){
  try{
    const obj = {name:req.body.name, email:req.body.email, password:req.body.password}
    const newPro = new Projects(obj)
    await newPro.save()
    const projects = await Projects.find({})
    console.log(projects)
  }catch(e){
    console.log(e)
  }
})


/**********************
 * Example get method *
 **********************/

app.get('/item', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/item/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/item', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/item/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/item', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/item/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/item', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/item/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3001, function() {
    console.log("App started")
    console.log("listening on port 3001")
});

module.exports = app
