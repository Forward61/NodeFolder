var net=require('net');
var encoding= require('encoding');

//创建服务器
var server=net.createServer(function(socket){
    
    //获取地址信息
    var address=server.address();
    var message='client,the server address is'+JSON.stringify(address);
    var sendMessage= '';
    
    
    //监听dada事件
    socket.on('data',function(data){
        sendMessage = data;
        //打印data
        console.log(data.toString());
        var readSize=socket.bytesRead;

        console.log('the size of data is'+readSize);
         var result = encoding.convert(data, "utf8");

        console.log("result :"+ result.toString()); //<Buffer d5 c4 d6 dc>
        console.log('接收the size of data is'+result.length);
        //发送数据
        socket.write(sendMessage,function(){
            
            var writeSize=socket.bytesWritten;
            
            console.log(sendMessage+'has send');
            console.log('the size of sendMessage is'+writeSize);

            var result = encoding.convert(sendMessage, "gbk");
            console.log("发送esult :"+ result.toString()); //<Buffer d5 c4 d6 dc>
                    console.log('发送the size of data is'+result.length);

        });

    });
});
 //设置监听端口
server.listen(8081,function(){
    
    console.log('server is listening');
});
