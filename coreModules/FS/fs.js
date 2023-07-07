const fs = require('fs');

//atv 01
// fs.readFile('text.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }else{
//       console.log(data);
//   }
// });

// ------------------------------------------------------------------

//atv 02
// fs.writeFile('arquivo.txt','Aqui tem definitivamente tem algo escrito!!',(err)=>{
//   if(err){
//     console.error(err)
//   }else{
//     console.log('Arquivo criado com sucesso!!')
//   }
// })

// ------------------------------------------------------------------

//atv 03
// fs.appendFile('arquivo.txt', '\r\nAgora o texto tem mais uma linhas!!', (err) => {
//   if (err) {
//     console.error(err)
//   } else {
//     console.log('Mais uma linha adicionada com sucesso!!')
//   }
// })

// ------------------------------------------------------------------

//atv 04
// fs.readFile('text.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   } else {
//     console.log(data);

//     fs.appendFile('arquivo.txt', `\n\n ${data}`, (err) => {
//       if (err) {
//         console.error(err)
//       } else {
//         console.log('arquivo copiado com sucesso!!')
//       }
//     })
//   }
// });

// ------------------------------------------------------------------

//atv 05
// fs.rename('arquivo.txt','ArquivoRenomeado.txt',function(err){
//   if(err) throw err;
//   console.log('Arquivo Renomeado');
// })

// ------------------------------------------------------------------

//atv 06
// fs.stat('algo.txt', function (err, stats) {
//   if (err) {
//     console.log('Arquivo não encontrado!');
//     return err;
//   }else{
//     console.log('Arquivo encontrado!');
//   }
// });

// ------------------------------------------------------------------