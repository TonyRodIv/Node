// Importa o módulo url, que permite analisar e construir URLs
const url = require('url');

// Define uma string com uma URL
const adress = 'https://www.meusite.com.br/catalog?produtos=cadeira';

// Cria um objeto URL usando a string e o construtor do módulo url
const parseUrl = new url.URL(adress);

// Imprime o objeto URL no terminal
console.log(parseUrl);
// Imprime a propriedade host do objeto URL, que contém o domínio e a porta
console.log(parseUrl.host)
// Imprime a propriedade pathname do objeto URL, que contém o caminho após o domínio
console.log(parseUrl.pathname)
// Imprime a propriedade search do objeto URL, que contém a parte da query string após o ?
console.log(parseUrl.search)
// Imprime a propriedade searchParams do objeto URL, que contém um objeto URLSearchParams com os pares de chave e valor da query string
console.log(parseUrl.searchParams)
// Imprime o valor da chave 'produtos' usando o método get do objeto URLSearchParams
console.log(parseUrl.searchParams.get('produtos'))
