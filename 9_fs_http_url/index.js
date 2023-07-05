const http = require('http');
const fs = require('fs');
const url = require('url');

const PORT = 5000;

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const filename = q.pathname.substring(1);

  if (filename.includes('html')) {
    if (fs.existsSync(filename)) {
      fs.readFile(filename, function (err, data) {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/html' });
          res.write('<h1>Internal Server Error</h1>');
          return res.end();
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile('404.html', function (err, data) {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/html' });
          res.write('<h1>Internal Server Error</h1>');
          return res.end();
        }
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>File Not Found</h1>');
    return res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
