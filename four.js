var dt=require('./three');
var h=require('http');
h.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("date is "+dt.d);
    res.end()
}).listen(8080,()=>{console.log("server is running....")});