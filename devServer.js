const path = require('path');
const express = require('express');
const config = require('./webpack.config.dev');
const verifiedData = {
    name: "Joe Blogs",
    address: "123 Front St. Toronto",
    mobileNumber: "(647) 123-4567"
}

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use('/verify', function(req, res, next) {
    res.status(200).send(JSON.stringify(verifiedData));
    next();
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

