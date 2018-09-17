const express = require('express');
const app = express();
var path = require('path');
app.use('/assets', express.static('assets'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})
app.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})
app.get('/services', function (req, res) {
  res.sendFile(path.join(__dirname + '/services.html'));
})
app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname + '/about.html'));
})
app.get('/portfolio', function (req, res) {
  res.sendFile(path.join(__dirname + '/portfolio.html'));
})
app.get('/pricing', function (req, res) {
  res.sendFile(path.join(__dirname + 'pricing.html'));
})
app.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname + 'contact.html'));
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
})