/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var http = require('http');
var request = require("request");
var querystring = require('querystring');
var fs = require('fs');
<<<<<<< HEAD
var url = require('url');
=======
>>>>>>> e3de5816e37a6b31360ad17a7a33b11f244cf348

http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
<<<<<<< HEAD
 
  req.on('end', function () {
       /**********request to another server from form*********/
           var lookurl  = querystring.parse(body);
           console.log(lookurl);
              request({url:'http://click-n-collect.azurewebsites.net/user/register', qs: lookurl ,method:'POST'}).pipe(
              fs.createWriteStream('user.json'));
 
        /*****read file and sent request to another url******/
           var obj = JSON.parse(fs.readFileSync('user.json', 'utf8'));
            var userId = (obj.UserId);
             console.log(userId);
                request({url:'http://click-n-collect.azurewebsites.net/shop/getall?'+'userid='+userId}).pipe(
                fs.createWriteStream('stores.json'));
        });

      res.writeHead(200, {
       
=======
  
  request({
    url: 'http://click-n-collect.azurewebsites.net/user/register', 
    qs: {DeviceId: 'gk23k6kyhk78444srt7', userName:'piterrr', deviceType:'0'},
    method: 'POST'

}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
    }
}).pipe(fs.createWriteStream('from.json'));
  
  req.on('end', function () {
      
console.log('http://click-n-collect.azurewebsites.net/shop/getall?'+body);
      res.writeHead(200, {
           
>>>>>>> e3de5816e37a6b31360ad17a7a33b11f244cf348
  'Content-Type': 'text/html; charset=UTF-8',
  'Cache-Control': 'no-cache',
  'Connection': 'keep-alive',
  'Access-Control-Allow-Headers': 'origin, content-type, accept',
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': '*'});
<<<<<<< HEAD
  
    res.end('Some text');
  }).listen(8180);;


=======
 
    res.end('Some text');
  });

}).listen(8180);
>>>>>>> e3de5816e37a6b31360ad17a7a33b11f244cf348
