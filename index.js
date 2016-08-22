
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.text());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res) => {
    res.send({
        body: req.body,
        query: req.query,
        headers: req.headers,
        path: req.path,
        method: req.method
    })
});


app.listen(5000);