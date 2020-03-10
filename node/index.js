const http = require('http')

http.createServer((req, res) => {

    if (req.url == '/text') {
        res.setHeader("Content-Type", "text/plain")
        res.end("Hello");
        return
    }
    if (req.url == '/test') {
        res.setHeader("Content-Type", "text/html")
        res.end("Hello");
        return
    }

    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.end("<h1>Hello World</h1>");
}).listen(3000)