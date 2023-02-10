const express = require('express');
const app = express();
const port = 8000;

app.get('/', function(req, res) {
    return res.send('<h1>shubham</h1>')
})

app.listen(port, function(err) {
    if(err) {
        console.log(`Error : ${err}`);
        return;
    }
    console.log(`server is running on port ${port}`);
})
