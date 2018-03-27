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
var AccessToken = require('twilio').jwt.AccessToken;
var VideoGrant = AccessToken.VideoGrant;
var ACCOUNT_SID = 'ACe68dc19a5cea48001c9982380dc9d1f3';
var API_KEY_SID = 'SK79aef9d3ce2c59b3d3821ec1323eb9ce';
var API_KEY_SECRET = 'YaHVcP4israaCjAQZh1XklQE5jemBfXQ';
var r=Math.random();
// Substitute your Twilio AccountSid and ApiKey details


// Create an Access Token
var accessToken = new AccessToken(
  ACCOUNT_SID,
  API_KEY_SID,
  API_KEY_SECRET
);


// Set the Identity of this token
 
accessToken.identity =""+r;
/*var r=str.toString();
accessToken.identity ='(str+1)'+r;
str++;*/
// Grant access to Video
var grant = new VideoGrant();
grant.room = 'myyyroom';
accessToken.addGrant(grant);

// Serialize the token as a JWT
var jwt = accessToken.toJwt();
console.log(jwt);
response.end(jwt);
})
app.listen(process.env.PORT || 5000);
