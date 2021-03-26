const http = require("http");
// const server = http.createServer()
const host = "172.18.210.125"
let express = require('express');
let app = express();
var cors = require('cors')
let port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const routes = require('./routes/routes')
var compression = require('compression');

var corsOptions = {
    origin: 'http://172.18.210.125',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors())
// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(compression());



// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});