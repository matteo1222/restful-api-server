const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
const Posts = require('./models/Posts');

//routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.use('/posts', postsRoute);


//Connect to DB
console.log(process.env.DB_CONNECTION);
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected...'))
        .catch(err => console.log(err));

//listening 
app.listen(3000);