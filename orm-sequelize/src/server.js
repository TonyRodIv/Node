const express = require('express')
const app = express();
const routes = require('./routes.js');
app.use(express.json());
app.use(routes);
app.listen(3333, ()=> console.log('💻 Servidor está sendo executado na porta 3333 ✅'));
