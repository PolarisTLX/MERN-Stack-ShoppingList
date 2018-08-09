const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// to be able to deploy to Heroku:
const path = require('path');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
// NOTE APPARENTLY THIS IS BUILT INTO EXPRESS NOW, SEE YT Video Comments
app.use(bodyParser.json());


// Connect to Mongo
// DB Config
const db = require('./config/keys').mongoURI;
mongoose.connect(db)
// NOTE ABOVE does not work? NOTE: Fixed.
// mongoose.connect('mongodb://paul:paul123@ds213832.mlab.com:13832/mern-stack-project-shoppinglist')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

// to be able to deploy to Heroku:
// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
