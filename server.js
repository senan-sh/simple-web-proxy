const express = require('express');
const httpProxy = require('http-proxy');
require('dotenv').config();
const app = express();

const proxy = httpProxy.createProxyServer({
    target: process.env.TARGET,
    followRedirects: true,
    changeOrigin: true,
    autoRewrite: true
})

app.all("*", (req, res) => {
    proxy.web(req, res);
});

app.listen(21123, () => console.log("Proxy is up."));