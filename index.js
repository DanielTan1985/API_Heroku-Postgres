const app = require('./routes');
const PORT = process.env.PORT || 8888;
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Welcome to Node.js Backend API, please manually select routes as stipulated:  /public  /user");
});


app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
  
});