require('./db/mongoose');
const express = require('express');
const app = express();
const port = 3001;
const Product = require('./model/products');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Tomate Todo API")
});

app.get('/products', (req, res) => {
    Product.find()
        .then((result) => {
            res.send(result)
        })
        .catch(err => res.status(404).send(err));
});

app.post('/product', (req, res) => {
    const product = new Product(req.body)
    product.save()
        .then(() => {
            res.status(201).send(dish);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});


app.listen(port, () => {
    console.log(`Funcionando en Puerto ${port}`);
});
