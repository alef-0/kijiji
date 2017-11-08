const path = require('path');
const express = require('express');
const request = require('request');
const http = require('http');
const requestsConfig = require('./requestsConfig');
const socket_io = require('socket.io');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);
const io = socket_io.listen(server);

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

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
            res.status(200).send(body.appLink + '&rt=P');
        }
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/response', function(req, res) {
    io.sockets.emit('action', {type:'LICENSE_KEY_RECEIVED', payload: req.body});

    request({
        url: requestsConfig.useLicense.url,
        method: "POST",
        json: true,
        body: {
            "license": req.body.license,
            "includeServiceResponses":true
        }
    }, function(error, response, body) {
        io.sockets.emit('action', {type:'LICENSE_KEY_RECEIVED', payload: response.body});
    });
});


app.use('/verify', function(req, res, next) {
    request(verifyLink, function(request, response) {
        const userVerifiedData = JSON.parse(response.body);
        res.status(200).send(userVerifiedData);
        next();
    });
});

server.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

