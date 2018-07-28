const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users.js');
const profile = require('./routes/api/profile.js');
const posts = require('./routes/api/posts.js');

const app = express();

// DB config
const db = require('./config/keys').mongoURI;

// Connect to mongodb
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('hello');
});

// User routes
app.use('/api/user', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));