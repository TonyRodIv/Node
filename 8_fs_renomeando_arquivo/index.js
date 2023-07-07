// Importa o módulo fs, que permite ler e escrever arquivos
const fs = require('fs');

// Renomeia o arquivo chamado arquive.txt para ArquivoRenomeado.txt usando a função rename do módulo fs
// Essa função recebe uma função de callback que é chamada após a renomeação do arquivo
fs.rename('arquive.txt','ArquivoRenomeado.txt',function(err){
    // Verifica se houve algum erro na renomeação do arquivo
    if(err) throw err; // Lança o erro usando a palavra-chave throw
    // Imprime uma mensagem de sucesso no terminal usando a função console.log
    console.log('Arquivo Renomeado');
})
