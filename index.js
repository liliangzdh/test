var express = require('express');
var app = express();

app.get('/', function(res, rep) {
    rep.send('Hello, word! liliangzdh.cn');
});

app.listen(3000);