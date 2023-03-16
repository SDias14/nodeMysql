# nodeMysql
 node with mysql



### para realizar a conexão com o banco de dados temos que instalar  a biblioteca sequelize. 

### `npm install --save sequelize`

### instalando o driver do mysql

### `npm install --save mysql2`

criando uma pasta model e dentro dela um arquivo chamado db.js

incluindo o sequelize nesse arquivo

### const sequelize = require('sequelize');

criando uma constante que vai receber uma instancia do sequelize passando o nome do banco de dados, o usuario e a senha 

### const sequelize = new Sequelize('celke', 'root', '3426', { 
###    host: 'localhost',
###    dialect: 'mysql'
### });