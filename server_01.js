const http=require('http');

const server=new http.Server();
server.on('request',function(req,res){
    
    res.writeHead(200,{
        
        "Content-Type":"text/html;charset=UTF-8"
        
    });
    res.end("欢迎来到perfect*的博客园哟！！！");
    
    
});

server.listen(3000,function(){
    
    console.log('welcome !!!');
});
