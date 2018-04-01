const http=require('http');

var ser=http.createServer(function(req,res){
	res.writeHead(200,{
		'Content-type':'text/html;charset=utf-8'
	});
	res.write("<h1>我的标题</h1>")
    res.write("haha");
    res.end("hehe");
});
ser.listen(3000);