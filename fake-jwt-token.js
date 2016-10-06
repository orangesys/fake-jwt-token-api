var http = require('http');
var uuid = require('node-uuid');
var nJwt = require('njwt');

function stringGen(len)
{
    var text = " ";
    var charset = "abcdefghijklmnopqrstuvwxyz";
    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
}


// https://getkong.org/plugins/jwt/
// curl -X POST http://kong:8001/consumers/{consumer}/jwt
// HTTP/1.1 201 Created
//
// {
//     "consumer_id": "7bce93e1-0a90-489c-c887-d385545f8f4b",
//     "created_at": 1442426001000,
//     "id": "bcbfb45d-e391-42bf-c2ed-94e32946753a",
//     "key": "a36c3049b36249a3c9f8891cb127243c",    this is iss in jwt
//     "secret": "e71829c351aa4242c2719cbfbe671c09"
// }
//
//
http.createServer(function (request, response) {
  var secret = uuid.v4();
  var claims = {
    iss: "a36c3049b36249a3c9f8891cb127243c",
  }
  var jwt = nJwt.create(claims,secret);
  var token = jwt.compact();
  var consumerId = stringGen(6);
  response.writeHead(200, {'Content-Type': 'application/json'});
  var json = JSON.stringify({
    consumerId: consumerId,
    token: token
  });
  response.end(json);
}).listen(8124);
 
console.log('Server running at http://127.0.0.1:8124/');
