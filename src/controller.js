const express = require('express');
const routes = express.Router();

const cliente = [{
    id:1,
    name:"João da Silva",
    cpf: "123.123.123-12",
    email: "Email@email.com"
}];

routes.post('/clientes', (req, res) => {
    const { name, cpf, email } = req.body;
    const id = cliente.length ? cliente[cliente.length - 1].id + 1 : 1;
  
    const novoCliente = { id, name, cpf, email };
    cliente.push(novoCliente);
  
    return res.status(201).json(novoCliente);
  });
  
  routes.get('/clientes', (req, res) => {
    return res.json(cliente);
  });
  
  routes.get('/clientes/:id', (req, res) => {
    const { id } = req.params;
    const cliente = cliente.find(c => c.id == id);
  
    if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });
  
    return res.json(cliente);
  });
  
  routes.put('/clientes/:id', (req, res) => {
    const { id } = req.params;
    const { name, cpf, email } = req.body;
  
    const index = clientes.findIndex(c => c.id == id);
    if (index === -1) return res.status(404).json({ message: 'Cliente não encontrado' });
  
    cliente[index] = { id: Number(id), name, cpf, email };
    return res.json(cliente[index]);
  });
  
  routes.delete('/clientes/:id', (req, res) => {
    const { id } = req.params;
  
    const index = cliente.findIndex(c => c.id == id);
    if (index === -1) return res.status(404).json({ message: 'Cliente não encontrado' });
  
    cliente.splice(index, 1);
    return res.status(204).send();
  });

module.exports = routes;