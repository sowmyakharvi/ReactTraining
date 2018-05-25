//refer a nodule module
let http = require("http")

//to hanle req and res
let server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write("<html><body><h2>My Node Example</h2></body></html>")
        
    }else if(req.url == "/admin"){
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.write("<html><body><h2>Hello Admin</h2></body></html>")
        
    }else if(req.url == "/data"){
        res.writeHead(200, {"Content-Type" : "application/json"})
        res.write(JSON.stringify({"message" : "this is json message" }))
        
    }else{
        
        res.write("<html><body><h2>Page Not found..</h2></body></html>")
       
    }
    res.end()
    //res.end("My first node http example")
})

server.listen(5000, "localhost", () => {
    console.log("server is running at port 5000")
})




