const http = require('http');
const fs = require('fs');
PORT = 8080;

const server = http.createServer((req, res) => {
  fs.readFile("index.html", function (err, data) {
    res.writeHead({ "Content-Type": "text/html" });
  });
  res.write();

  res.end;
});

server.listen(PORT, () => {
  console.log(`Servidor Rodando da Porta ${PORT}`);
});
