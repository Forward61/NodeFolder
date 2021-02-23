//引入net模块
var net=require('net');
//创建TCP服务器
var server=net.createServer(function(socket){
    
    console.log('someone connets');
    
})
server.listen(18001,function(){
    
    console.log('server is listening');
});
