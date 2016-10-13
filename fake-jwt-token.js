var http = require('http');
var url = require('url');
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

http.createServer(function (request, response) {
  var query = url.parse(request.url,true).query;
  if (query["rp"])
  {
    var consumerId = stringGen(6);
    response.writeHead(200, {'Content-Type': 'application/json'});
    var json = JSON.stringify({
      consumerId: consumerId
    });
    response.end(json);
  }
  else
  {
    response.writeHead(200, {'Content-Type': 'application/json'});
    var json = JSON.stringify({
      consumer_id: uuid.v4(),
      created_at: Date.now(),
      id : uuid.v4(),
      key : uuid.v4(),
      secret : uuid.v4()
    });
    response.end(json);
  }
}).listen(8124);
 
console.log('Server running at http://127.0.0.1:8124/');
