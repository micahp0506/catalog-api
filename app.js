'use strict';


const express = require('express');
const mongojs = require('mongojs');
const db = mongojs('catalog', ['products']);

const app = express();


app.get('/', (req, res) => {
    res.send("Success!")
})

app.get('/products', (req, res) => {
    console.log("Fething products...");

    db.products.find((err, body) => {
        if (err) throw err;

        console.log("Sending product...");
        res.json(body);
    });
});

app.get('/products/:id', (req, res) => {
    console.log("Fething product...");

    db.products.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, body) => {
        if (err) throw err;

        console.log("Sending product...");
        res.json(body);
    });
});



app.listen(3000);
console.log("Server running on port 3000");
