require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.APP_PORT;

app.get('/', function(req, res){
 res.send('default route');
});

app.listen(5000, function(){
    console.log('sever is rinning on port ' + PORT);
});