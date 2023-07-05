const fs = require('fs');

fs.rename('arquive.txt','ArquivoRenomeado.txt',function(err){
    if(err) throw err;
    console.log('Arquivo Renomeado');
})

