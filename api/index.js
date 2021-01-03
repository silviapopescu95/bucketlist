const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// initializes the express application
const app = express()

// imports the API from the routes/api folder
const books = require('./routes/api/books')



// sets up CORS for Cross-Origin-Resource-Sharing
var corsOptions = {
    origin: "*"
  };

app.use(cors(corsOptions))

// converts API responses to JSON for easy use
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// imports our database credentials (stored separately for security)
const db = require('./config/keys').mongoURI

// imports roles and users from db
const dbAuth = require("./models");
const Role = dbAuth.role;

// initializes our database using the credentials
dbAuth.mongoose
    .connect(db, () => { }, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Mongo Database connected'))
    .catch(err => console.log(err))

// creates a route where we can interact with our API
app.get("/", (req, res) => {
    res.json({ message: "Running!" });
  });
app.use('/api/books', books)

require('./routes/api/auth.js')(app);
require('./routes/api/user.js')(app);
// sets the port number depending if we are in production or development
const port = process.env.PORT || 5000

// intializes the server and logs a message
server = app.listen(port, () => console.log(`Server running on port ${port}`))

function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });
  
        new Role({
          name: "moderator"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'moderator' to roles collection");
        });
  
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }