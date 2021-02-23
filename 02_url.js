var url=require("url");//引入url模块

var http=require("http");//引入HTTP模块
//创建HTTP模块，因为URL的监听，需要HTTP模块的开启

//用HTTP模块创建服务
/*
 
 * req获取url信息（request）
 * res浏览器返回响应信息（response）
 * */


http.createServer(function(req,res){
    
    
       var result=url.parse(req.url,true);
        
        console.log(result);
        
        
        
        /*Url{
            
            protocol:null,
            slashes:null,
            auth:null,
            host:null,
            port:null,
            hostname:null,
            hash:null,
            search:'?userName=perfect*&userAge=21',
            query:{userName:'perfect*',userAge:'21'},
            pathname:'/',
            path:'/?userName=perfect*&userAge=21',
            href:'/?userName=perfect*&userAge=21'
        }
        
        */
        console.log(result.query.userName);
        console.log(result.query.userAge);

    
    
    // 设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
    res.writeHead(200,{
        "Content-Type":"text/html;charset=UTF-8"
        
        
        
        
    });
    // 往页面打印值
    res.write('<h1 style="text-align:center">欢迎来到perfect*博客园</h1>');
    
    // 结束响应
    res.end();
    
}).listen(3000);
