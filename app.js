const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);

app.use(express.static(path.join(__dirname, 'public')));

server.listen(8007, ()=> {
    console.log(`Serving at http://localhost:${server.address().port}`);
})