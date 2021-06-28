const express = require('express')
//const dotenv = require('dotenv');
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
const app = express()
app.use(express.json())

try
{
  mongoose.connect('mongodb://localhost:27017/newdb', {useNewUrlParser: true, useUnifiedTopology: true});
}
catch(error){
  console.log(error)
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());





app.use("/users", require('./routes/users.routes'));


const PORT = process.env.PORT || 5000
app.listen(PORT , ()=>{ console.log("running server ")})






// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// require('dotenv').config();
// const errorHandler = require("./middleware/error-handler");
// const errorMessage = require("./middleware/error-message");
// const accessControls = require("./middleware/access-controls");
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser')
// app.use(
//     bodyParser.urlencoded({
//       extended: true
//     })
//   );
  
//   app.use(bodyParser.json()); // to support JSON-encoded bodies
  
// // Requiring Routes

// const UsersRoutes = require('./routes/users.routes');

// // connection to mongoose
// const mongoCon = process.env.mongoCon;

// mongoose.connect(mongoCon,{ useNewUrlParser: true,useCreateIndex: true, useUnifiedTopology: true });


// const fs = require('fs');
// fs.readdirSync(__dirname + "/models").forEach(function(file) {
//     require(__dirname + "/models/" + file);
// });

// // in case you want to serve images 
// app.use(express.static("public"));

// app.get('/',  function (req, res) {
//   res.status(200).send({
//     message: 'Express backend server'});
// });

// app.set('port', (3000));

// app.use(accessControls);
// app.use(cors());

// // Routes which should handle requests
// app.use("/users",UsersRoutes);
// // app.use("/users", userRoutes);

// app.use(errorHandler);

// app.use(errorMessage);

// server.listen(app.get('port'));
// console.log('listening on port',app.get('port'));
