
# Simple - API

A simple web API to demonstrate relationship of customer and product in a database

## Run Locally

**Prepare Database** - The API it has been tested with MySQL & Postgress database but I
believe it can work with any database. Check out TypeORM for more information.
(Make sure your preferable database is installed)

```bash
    mysql -u root -p;
    CREATE DATABASE simple_api;
```

**Configure TypeORM** Edit the  `ormconfig.json` file located in the root of the project with your
databse crediatials. for example:

```json
   "type": "mysql",
   "host": "localhost",
   "port": 3306,
   "username": "root",
   "password": "admin",
   "database": "simple_api",
   "synchronize": true,
   "logging": false,
   ...
```

Install dependencies

```bash
  yarn

  // or

  mpm install
```

Load test data to the database

```bash
  yarn run loadData
```

Start the server

```bash
  yarn run dev
```


## API Reference


#### Get all simcards

```http
  GET /sim-cards 
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none`    | `json` | list all simcards |

#### Create new order

```http
  POST /orders 
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `data`    | `json`   |  create order in database |

#### Get all orders

```http
  GET /orders 
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none`    | `json`   | list all orders |



#### Update an Order

```http
  PUT /orders/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `data`    | `json`   | update an existing order in database|

<!-- #### add(num1, num2) -->

<!-- Takes two numbers and returns the sum. -->











<!-- ## Simple Rest API using Node & Express -->

<!-- #### This project is hosted on heroku, you can visit the end listed below to test it. -->


<!-- ### If you want want to run it local you will need the following: -->
<!-- 1. Node -->
<!-- 2. NPM or yarn -->
<!-- 3. MySql installed in your machine -->

<!--  <iframe width="100%" height="500px" style="box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); border-radius:15px;" allowtransparency="true" allowfullscreen="true" scrolling="no" title="Embedded DrawSQL IFrame" frameborder="0" src="https://drawsql.app/justme-2/diagrams/simple-api/embed"> -->

<!--  </iframe> -->
<!-- Steps to run this project: -->

<!-- 1. Run `npm i` command -->
<!-- 2. Setup database settings inside `ormconfig.json` file -->
<!-- 3. Run `npm start` command -->



