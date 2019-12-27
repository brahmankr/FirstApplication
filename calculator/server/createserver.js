http=require("http");
http.createServer(function(req,resp){
	console.log("server created");
	resp.write("hii");
	resp.end("bye");
}).listen(3000,function()
{console.log("3000 port server running");});