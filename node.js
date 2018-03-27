var express=require("express");

var app = express();


/*app.listen(3000,function(err){
	if(err){
	}else{
	console.log("listening");
	}
});*/

app.get('/tokens',function(request,response)
{
response.send("hi");

})
app.listen(process.env.PORT || 8080);
