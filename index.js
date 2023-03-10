const express = require('express');
const app = express();
const port = 8000;

// express router
app.use('/', require('./routes'));

app.listen(port, function(err) {
    if(err) {
        console.log(`Error : ${err}`);
        return;
    }
    console.log(`server is running on port ${port}`);
})
