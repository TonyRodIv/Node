// Importa o módulo https, que permite criar e manipular servidores web seguros
const http = require('https')
// Define a porta que o servidor vai usar
const PORT = 3000


// Cria um servidor usando a função createServer do módulo https
// Essa função recebe uma função de callback que é chamada a cada requisição
const server = http.createServer((req, res)=>{
    // Importa o módulo url e usa a função parse para obter um objeto com as informações da url da requisição
    // O segundo argumento true indica que a query string deve ser analisada como um objeto
    const urlInfo = require('url').parse(req.url, true);
    // Obtém o valor da chave name da query string usando a propriedade query do objeto urlInfo
    const name = urlInfo.query.name

    // Define o status da resposta como 200 (OK)
    res.statusCode = 200
    // Define o tipo de conteúdo da resposta como HTML
    res.setHeader('contenty-type', 'text/html')

    // Verifica se o valor de name é vazio ou não e responde de acordo
    if(!name){
        // Escreve um formulário HTML na resposta para solicitar o nome do usuário
        res.end('<h1>Preencha seu nome:</h1>  <form method="GET"> <input text="text" name="name" /> <input type="submit" value="Enviar" /> </form>')
    
    }else {
        // Escreve uma mensagem de boas-vindas na resposta usando o valor de name
        res.end(`seja Bem vindo ${name}`)
    }
})

// Faz o servidor escutar na porta definida e imprime uma mensagem no terminal
server.listen(PORT, () => {
    console.log(`Servidor Rodando da Porta ${PORT}`);
})
