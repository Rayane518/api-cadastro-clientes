# API de Cadastro de Clientes

## Descrição

API REST desenvolvida em NestJS para gerenciamento de clientes.

O sistema permite:
- cadastrar clientes
- listar clientes
- buscar clientes por nome
- buscar clientes por email
- atualizar clientes
- remover clientes

O projeto foi desenvolvido utilizando:
- Clean Architecture
- SOLID
- Programação Orientada a Objetos (POO)

## Tecnologias Utilizadas

- NestJS
- TypeScript
- MongoDB
- Mongoose
- Swagger
- class-validator
- class-transformer

## Estrutura do Projeto

src/
├── clients/
│   ├── application/
│   ├── domain/
│   ├── infrastructure/
│   ├── presentation/
│   └── clients.module.ts
├── app.module.ts
└── main.ts
```

## Instalação

Clone o repositório:

```bash
git clone LINK_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd api-cadastro-clientes
```

Instale as dependências:

```bash
npm install
```

## Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
MONGO_URI=mongodb://localhost:27017/clientes_db
```

## Executando o Projeto

Execute o comando:

```bash
npm run start:dev
```

O servidor iniciará em:

```txt
http://localhost:3000
```

## Swagger

A documentação da API pode ser acessada em:

```txt
http://localhost:3000/docs
```

## Endpoints

### Criar Cliente

```http
POST /clients
```

Body:

```json
{
  "name": "Maria Silva",
  "email": "maria@email.com",
  "phone": "999999999",
  "address": "Rua A"
}
```

### Listar Clientes

```http
GET /clients
```

### Buscar Cliente por Nome

```http
GET /clients/name/:name
```

### Buscar Cliente por Email

```http
GET /clients/email/:email
```

### Atualizar Cliente

```http
PUT /clients/:id
```

### Remover Cliente

```http
DELETE /clients/:id
```

## Funcionalidades

- Cadastro de clientes
- Busca por nome
- Busca por email
- Atualização de dados
- Remoção de clientes
- Validação de dados com DTOs
- Tratamento de exceções
- Integração com MongoDB
- Documentação com Swagger

## Autor

Projeto desenvolvido por Aline Dayane, Mateus Gomes e Rayane Mariano.
