const path = require('path');
const express = require('express');
const verifiedData = {
    name: "Joe Blogs",
    address: "123 Front St. Toronto",
    mobileNumber: "(647) 123-4567"
}

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('dist'));

app.get('*', (req, res) => {
    console.warn(path.join(__dirname, 'index.html'));
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/verify', function(req, res, next) {
    res.status(200).send(JSON.stringify(verifiedData));
    next();
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

