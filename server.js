// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { request } = require('express');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
// Spin up the server
const server = app.listen(port, listening);
// Call back to debug
function listening(){
  console.log("server running");
  console.log(`running on localhost: {$port}`);
}

// Initialize all route with a callback function
app.get('all', sendData);

// Callback function to complete GET '/all'
function sendData(req, res) {
  res.send(projectData);
  // projectData = [];
}

// Post Route
app.post('/data', (req, res) => {
  newEntry = {
    temp: req.body.temp,
    date: req.body.date,
    content: req.body.content
  };
  projectData.push(newEntry);
  // res.send(projectData);
});
