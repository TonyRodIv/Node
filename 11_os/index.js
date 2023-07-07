// Importa o módulo os, que permite obter informações sobre o sistema operacional
const os = require('os');

// Imprime um array com os objetos que representam cada núcleo da CPU
console.log(os.cpus());
// Imprime a quantidade de memória livre em bytes
console.log(os.freemem());
// Imprime a quantidade de memória total em bytes
console.log(os.totalmem());
// Imprime o caminho do diretório home do usuário atual
console.log(os.homedir());
// Imprime o tipo do sistema operacional
console.log(os.type());
