const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const verifiedData = {
    name: "Joe Blogs",
    address: "123 Front St. Toronto",
    mobileNumber: "(647) 123-4567"
}

const app = express();
const compiler = webpack(config);

const host = 'http://localhost';
const port = process.env.npm_config_port ? process.env.npm_config_port : 3000;

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/verify', function(req, res, next) {
    res.status(200).send(JSON.stringify(verifiedData));
    next();
});

app.listen(port, 'localhost', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.info('==> Listening on port %s. Open up %s:%s/ in your browser.', port, host, port);
});
