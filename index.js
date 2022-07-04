const app = require('./routes');
const PORT = process.env.PORT || 8888;
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');



// app.use(cors());
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send("Welcome to Node.js Backend API, please manually select routes as stipulated:  /public  /user");
// });



var corsOptions = {
  // origin: "https://gentle-fortress-35413.herokuapp.com",
  origin: "http://localhost:3000",
  // credentials: true,
  // optionSuccessStatus:200,
};
app.use(cors(corsOptions));


app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send("Welcome to Node.js Backend API, please manually select routes as stipulated:  /public  /user");
  next()
});



app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
  
});



// var corsOptions = {
//   // origin: "https://gentle-fortress-35413.herokuapp.com",
//   origin: "http://localhost:3000",
//   // credentials: true,
//   // optionSuccessStatus:200,
// };
// app.use(cors(corsOptions));


// app.all('/', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.send("Welcome to Node.js Backend API, please manually select routes as stipulated:  /public  /user");
//   next()
// });