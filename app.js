/**
 * Created by Jecks on 30.04.2014.
 */
'use strict'

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app'));
app.set('port', process.env.PORT || 80);
app.listen(app.get('port'));