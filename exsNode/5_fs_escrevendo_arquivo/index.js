// Importa o módulo http, que permite criar e manipular servidores web
const http = require('http')
// Importa o módulo fs, que permite ler e escrever arquivos
const fs = require('fs')

// Define a porta que o servidor vai usar
const PORT = 9000


// Cria um servidor usando a função createServer do módulo http
// Essa função recebe uma função de callback que é chamada a cada requisição
const server = http.createServer((req,res)=>{
    // Importa o módulo url e usa a função parse para obter um objeto com as informações da url da requisição
    // O segundo argumento true indica que a query string deve ser analisada como um objeto
    const UrlInfo = require('url').parse(req.url, true)
    // Obtém o valor da chave name da query string usando a propriedade query do objeto UrlInfo
    const name = UrlInfo.query.name

    // Verifica se o valor de name é vazio ou não e responde de acordo
    if(!name){
        // Lê o arquivo index.html usando a função readFile do módulo fs
        // Essa função recebe uma função de callback que é chamada após a leitura do arquivo
        fs.readFile('index.html', function(err,data){
        // Define o status da resposta como 200 (OK) e o tipo de conteúdo como HTML usando a função writeHead do objeto res
        res.writeHead(200, {'Content-Type':'text/html'})
        // Escreve os dados do arquivo na resposta usando a função write do objeto res
        res.write(data)
        // Encerra a resposta usando a função end do objeto res
        return res.end()
        })
    } else {
        // Escreve o valor de name em um arquivo chamado arquivo.txt usando a função writeFile do módulo fs
        // Essa função recebe uma função de callback que é chamada após a escrita do arquivo
        fs.writeFile('arquivo.txt',name, function(err,data){
            // Define o status da resposta como 302 (Found) e o cabeçalho Location como '/' usando a função write do objeto res
            // Isso indica que a resposta é um redirecionamento para a página inicial
            res.write(302,{
                Location:'/'
            })
            // Encerra a resposta usando a função end do objeto res
            return res.end()

        })
    }

})

// Faz o servidor escutar na porta definida e imprime uma mensagem no terminal
server.listen(PORT, ()=>{
    console.log('Servidor On' +PORT)
})
