//引入net模块
var net=require('net');
//创建TCP服务器
// var server=net.createServer(function(socket){
    
//     console.log('someone connets');
    
// })

//创建服务器
var server=net.createServer(function(socket){
    
    //获取地址信息
    var address=server.address();
    // var message='client,the server address is'+JSON.stringify(address);
    var message="12345678<?xml  version=\'1.0\' encoding=\'UTF-8\'?><persons><person id=\'23\'> <name>李明xxx</name><age>23ccc</age></person></persons>";

    //发送数据
    socket.write(message,function(){
        
        var writeSize=socket.bytesWritten;
        
        console.log(message+'has send');
        console.log('the size of message is'+writeSize);
    });
    
    //监听dada事件
    socket.on('data',function(data){
        
        //打印data
        console.log(data.toString());
        var readSize=socket.bytesRead;
        console.log('the size of data is'+readSize);
    });
});

 //设置监听端口
server.listen(14015,function(){
    
    console.log('server is listening');
});
// server.listen(14015,function(socket){
    
//     var message='<?xml version=\'1.0\' encoding=\'UTF-8\'?><persons><person id=\'23\'> <name>李明xxx</name><age>23ccc</age></person></persons>';
//     //发送数据
//     socket.write(message);
//     console.log('server is listening');
// });