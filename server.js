//Dependencies
const express = require("express");
const mongoose = require('mongoose');
const axios = require('axios');

// Require all models
const db = require('./client/models/Book');

//Set path and port
const path = require("path");
const PORT = process.env.PORT || 3001;

// Define middleware here
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//! Connect to the Mongo DB **********************************************
// If deployed, use the deployed database. Otherwise use the local database
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks';

// Connect to the db
// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// });

mongoose.connect(MONGODB_URI, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }).then(
  () => 
  { 
    /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */ 
    console.log('MongoDB connection successful');   
  },
  err => 
  { 
    /** handle initial connection error */
    console.log('MongoDB connection Failed');
  }
);


//! Define API routes here **************************************
app.get('/api/books', function(req, res) {
  // Send a message to the client
  res.send('Get all the books');
  
  // Grab every document in the Books collection
  db.Book.find({})
    .then(function(dbBook) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(dbBook);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Listen for server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});