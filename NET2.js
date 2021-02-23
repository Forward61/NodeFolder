var net=require('net');

//创建服务器
var server=net.createServer(function(socket){
    //监听dada事件
    socket.on('data',function(data){
        
        //打印data
        console.log(data.toString());
    });
});
 //设置监听端口
server.listen(18001,function(){
    
    console.log('server is listening');
});
