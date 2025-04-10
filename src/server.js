const express = require('express');
const routes = require('./controller');
const app = express();

app.use(express.json());
app.use(routes);

app.listen (3000, () => {
    console.log('API rodando na porta: 3000');
})