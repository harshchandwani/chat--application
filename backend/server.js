const express = require('express');
const dotenv = require("dotenv");
const { chats } = require('./data/data');
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const {notFound, errorHandler} = require('./middleware/errorMiddleware')
// This code is written in JavaScript and uses the Express framework to create a simple web server. The first line const app = express(); creates an instance of the Express application. The app.get() method is used to define a route for the server to handle HTTP GET requests to the root path '/'. When a request is made to this route, the callback function (req,res) => {...} is executed. This function takes two arguments: req, which represents the request object, and res, which represents the response object. The function uses the res.send() method to send a response back to the client with the text "API is Running". This means that when you visit the root path of the server in a web browser, you will see the text "API is Running" displayed on the page.
dotenv.config();
connectDB();
const app = express();


app.use(express.json()); // to accpet json data
//we are creating a
app.get('/', (req,res) => {
    res.send("API is Running");
});

app.use('/api/user', userRoutes);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(5000, console.log('Server Started Successfull at PORT ${PORT} '));




// app.get('/api/chat', (req, res) => {
//     res.send(chats)
// })

// app.get('/api/chat/:id', (req, res)  => {
//     // console.log(res.parms.id);
//     const singleChat = chats.find((c) => c._id === req.params.id);
//     res.send(singleChat);
// });