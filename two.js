var x=require('http')
x.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("Hello Good Morning");
    res.end();
}).listen(8080, ()=>{
    console.log("server is running on port 8080");
});