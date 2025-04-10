# API de Clientes com Node.js

Essa API simula um CRUD básico de clientes utilizando Node.js e Express, com dados armazenados em memória.

---

# Para rodar o Docker

*Clone o repositório:*

```sh
git clone https://github.com/pedrohenr12/Trabalho-Cloud.git
```

```sh
cd Trabalho-Cloud
```

```sh
docker build -t api-cliente .
```

```sh
docker run -p 3000:3000 api-cliente
```
# Endpoints

GET /clientes
Retorna todos os clientes cadastrados.

GET /clientes/:id
Retorna um cliente específico pelo id.

*POST /clientes*
Cria um novo cliente.
```json
{
  "name": "João da Silva",
  "cpf": "123.123.123-12",
  "email": "Email@email.com"
}
```

PUT /clientes/:id
Atualiza os dados de um cliente específico.
```json
{
  "name": "Maria Oliveira",
  "cpf": "456.456.456-45",
  "email": "maria@email.com"
}
```

GET /clientes/:id
Remove um cliente específico pelo id.
