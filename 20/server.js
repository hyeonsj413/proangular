var http = require('http');
var connect = require('connect');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = connect()
    .use(logger())
    .use(connect.static('./'))
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .use(bodyParser.json())
    .use(function(req, res){
        res.end(JSON.stringify(req.body));
    })

http.createServer(app).listen(8000);