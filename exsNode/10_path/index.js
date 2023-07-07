// Importa o módulo path, que permite manipular caminhos de arquivos e diretórios
const path = require('path');

// Define uma string com um caminho personalizado
const custumPath = '/relatorios/tonho/relatoriosemanal.pdf'
// Imprime o diretório do caminho personalizado usando a função dirname do módulo path
console.log(path.dirname(custumPath)); 
// Imprime o nome do arquivo do caminho personalizado usando a função basename do módulo path
console.log(path.basename(custumPath));
// Imprime a extensão do arquivo do caminho personalizado usando a função extname do módulo path
console.log(path.extname(custumPath));

// Imprime o caminho absoluto de um arquivo chamado teste.txt usando a função resolve do módulo path
console.log(path.resolve('teste.txt')); //path.resolve mostra o caminho absoluto


// ----------------------------------------------------------------

// Define duas strings com o nome de uma pasta intermediária e um arquivo
const midFolder = 'relatorios';
const fileName = 'arquivo.txt';

// Cria um caminho usando a função join do módulo path, que recebe vários argumentos e os concatena com o separador adequado
const finalPath = path.join('/','arquivos',midFolder,fileName)

// Imprime o caminho criado
console.log(finalPath)
