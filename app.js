const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const usersRouter = require('./routes/users');
const gamesRouter = require('./routes/games');
const categoriesRouter = require('./routes/categories');
const apiRouter = require('./routes/api')

const cookieParser = require("cookie-parser");
const {pagesRouter} = require("./routes/pages")

const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter, 
  apiRouter,
  express.static(path.join(__dirname, "public"))
);

app.listen(PORT);
