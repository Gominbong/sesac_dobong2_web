const http = require('http')
const fs = require('fs')

const server = http.createServer(function(requset, response){
    // console.log(requset) // 요청 객체 정보

    console.log('url: ', requset.url)

    // response
    response.writeHead(200, {"content-type":"text/html; charset=utf-8"})
    // response.write('<p>응답1</p>')
    // response.write('<p>응답2</p>')
    // response.write('<p>응답3</p>')
    // response.end('<h3>응답 종료</h3>')

    try{
        const data = fs.readFileSync('./inde.html')
        response.end(data)
    }catch(err){
        console.log(err)
        const data = fs.readFileSync('./404.html')
        response.end(data)
    }
})

const PORT = 8080

// 서버 이벤트 - connection, request
server.on('connection', function(request, response){
    console.log('connection event 발생')
})

server.on('request', function(request, response){
    console.log('request event 발생')
})

// 포트 열기
server.listen(PORT,function(){
    console.log(`server listening on ${PORT}`)
})