# 🍽️ Restaurant API

API desenvolvida com **Node.js + Express** para simular o funcionamento de um sistema de gerenciamento de mesas em um restaurante.

O projeto permite gerenciar sessões de mesas e pedidos, além de calcular o total consumido em cada mesa.

---

# 🚀 Tecnologias utilizadas

* **Node.js**
* **Express**
* **Knex (Query Builder)**
* **Zod (validação de dados)**
* **SQL Database**
* **Beekeeper Studio** (visualização e gerenciamento do banco)

---

# 📦 Principais conceitos aplicados

### ✔️ Criação de API com Express

Utilização do **Express** para estruturar a aplicação backend e criar endpoints para manipulação de dados.

A aplicação segue uma organização baseada em **controllers e rotas**, facilitando a manutenção e escalabilidade do código.

---

### ✔️ Validação de dados com Zod

Para garantir a integridade dos dados recebidos pela API, foi utilizado **Zod** para validação.

Exemplo:

```javascript
const bodySchema = z.object({
  table_id: z.number(),
})

const { table_id } = bodySchema.parse(request.body)
```

Isso garante que apenas dados válidos sejam processados pela aplicação.

---

### ✔️ Integração com banco de dados SQL

A aplicação se conecta a um banco de dados **SQL** para armazenar e manipular informações relacionadas às mesas e pedidos.

Durante o desenvolvimento foi utilizado **Beekeeper Studio** para:

* visualizar tabelas
* executar queries SQL
* validar dados armazenados

---

### ✔️ Utilização do Knex (Query Builder)

Para facilitar a comunicação com o banco de dados foi utilizado **Knex.js**, um Query Builder que permite escrever queries SQL utilizando JavaScript.

Exemplo de inserção de dados:

```javascript
await knex("tables_sessions").insert({
  table_id,
  opened_at: knex.fn.now(),
})
```

Exemplo de consulta:

```javascript
const sessions = await knex("tables_sessions")
.orderBy("closed_at")
```

---

### ✔️ Cálculo de valores utilizando SQL

A API também realiza cálculos diretamente no banco utilizando **funções SQL**, como `SUM`, para obter o valor total consumido em uma mesa.

Exemplo:

```javascript
const order = await knex("orders")
.select(
  knex.raw("SUM(price * quantity) AS total")
)
.where({ table_session_id })
.first()
```

---

# 📂 Estrutura do projeto

```
src
 ├── controllers
 │   ├── TablesSessionsController.ts
 │   └── OrdersController.ts
 │
 ├── routes
 │   ├── tablesSessionsRoutes.ts
 │   └── ordersRoutes.ts
 │
 ├── database
 │   └── knex.ts
 │
 └── app.ts
```

---

# 🧪 Testes da API

As requisições da API foram testadas utilizando ferramentas como:

* **Insomnia**
* **Postman**

---

# 🎯 Objetivo do projeto

Este projeto foi desenvolvido com foco em **aprendizado de desenvolvimento backend**, aplicando conceitos importantes como:

* criação de APIs REST
* validação de dados
* integração com banco de dados
* manipulação de queries SQL
* organização de código utilizando controllers


Projeto desenvolvido para estudo e prática de **Node.js, APIs REST e banco de dados SQL**.
