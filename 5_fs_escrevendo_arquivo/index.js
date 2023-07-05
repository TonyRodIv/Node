const http = require('http')
const fs = require('fs')

const PORT = 9000


const server = http.createServer((req,res)=>{
    const UrlInfo = require('url').parse(req.url, true)
    const name = UrlInfo.query.name

    if(!name){
        fs.readFile('index.html', function(err,data){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data)
        return res.end()
        })
    } else {
        fs.writeFile('arquivo.txt',name, function(err,data){
            res.write(302,{
                Location:'/'
            })
            return res.end()

        })
    }

})

server.listen(PORT, ()=>{
    console.log('Servidor On' +PORT)
})