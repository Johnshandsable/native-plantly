const express = require('express');
const bodyParser = require('body-parser');
const identifyRouter = require('./routes/identify.router');
const plantRouter = require('./routes/plant.router');
const plantv2Router = require('./routes/plant.v2.router');
const searchRouter = require('./routes/search.router');
const gardenRouter = require('./routes/garden.router');
const gardenSectionRouter = require('./routes/garden.section.router');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/plant-details', plantRouter);
app.use('/garden', gardenRouter);
app.use('/api/search', searchRouter);
app.use('/api/section', gardenSectionRouter);
// app.use('/api/identify', identifyRouter);

// Testing Routes
app.use('/api/v2', plantv2Router);

// Serve static files
app.use(express.static('build'));
// app.use(express.static(path.join(__dirname, 'public')));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
