var path = require('path');
var express = require('express');
var request = require('request');
var http = require('http');
var requestsConfig = require('./requestsConfig');
var socket_io = require('socket.io');

const verifyLink = 'https://ca-thebank.demo.verified.me/poll?state=80c87542-d0f9-4f56-ad3f-9a495d1a7efc&_=1510137849453';
const app = express();
const server = http.createServer();
server.listen(3001);
const io = socket_io.listen(server);

const port = process.env.PORT || 3000;

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/licenseRequest', function(req, res, next) {
    request({
        url: requestsConfig.licenseRequest.url,
        method: "POST",
        json: true,
        body: requestsConfig.licenseRequest.body
    }, function(error, response, body) {
        if (body) {
            res.status(200).send(body.appLink);
        }
    });
});

app.post('/response', function(req, res) {
    io.sockets.emit('action', {type:'MESSAGE', payload:'good day!'});
});


app.use('/verify', function(req, res, next) {
    request(verifyLink, function(request, response) {
        const userVerifiedData = JSON.parse(response.body);
        res.status(200).send(userVerifiedData);
        next();
    });
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

