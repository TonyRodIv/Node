// Importa o módulo fs, que permite ler e escrever arquivos
const fs = require('fs')

// Exclui o arquivo chamado arquivo.txt usando a função unlink do módulo fs
// Essa função recebe uma função de callback que é chamada após a exclusão do arquivo
fs.unlink('arquivo.txt',function(err){
    // Verifica se houve algum erro na exclusão do arquivo
    if(err){
        // Imprime o erro no terminal usando a função console.log
        console.log(err)
        // Encerra a execução da função de callback usando a palavra-chave return
        return
    }
    // Imprime uma mensagem de sucesso no terminal usando a função console.log
    console.log('Arquivo excluido')
})
