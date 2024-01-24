const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');

const app = express();

// Init middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// // Homepage Route
// app.get('/', (req, res) =>
//   res.render('index', {
//     title: 'Member App',
//     members
//   })
// );

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// leaderboard
app.use('/api/leaderboard', require('./routes/api/leaderboard'));

// give points
app.use('/api/givePoints', require('./routes/api/givePoints'));

// login
app.use('/api/login', require('./routes/api/login'));

// user info
app.use('/api/userInfo', require('./routes/api/userInfo'));

// course info
app.use('/api/courseInfo', require('./routes/api/courseInfo'));

// courses
app.use('/api/courses', require('./routes/api/courses'));

// register to course
app.use('/api/registerToCourse', require('./routes/api/registerToCourse'));


app.use('/api/test', require('./routes/api/test'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
