require('dotenv').config();
// Create Express App
const express = require('express');
const app = express();
const mongoose=require('mongoose')

// Body Parser
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Routes import
const userRoutes = require('./api/routes/user');
const eventRoutes=require('./api/routes/event');
const cors = require('./cors');
const error = require('./error');
const path = require('path');

app.use('/Uploads', express.static(path.join(__dirname, 'Uploads')));

// const cors = require('cors');
// app.use(cors({
//     origin: 'http://192.168.16.184:3000', // Allow only your frontend domain
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
//     credentials: true, // If you need to handle cookies or authentication
// }));
// Connect Database
// var connectDatabase = require('./databaseConnect')
// const DATABASE_KEY = process.env.DATABASE_URL

// connectDatabase(DATABASE_KEY);


const db =
  "mongodb+srv://nisanth78r:Roshan123@cluster0.ekig8.mongodb.net/EventManagement";
mongoose.set("strictQuery", false);
mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process on connection failure
  });


//Body Parser
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Static Url
app.use('/Uploads',express.static('Uploads'))

//Handeling cors error
app.use(cors);
app.use('/user', userRoutes);
app.use('/event',eventRoutes)
app.use(error);

module.exports = app;