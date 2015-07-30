/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var http = require('http');
var request = require("request");
var querystring = require('querystring');
var fs = require('fs');

http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  
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
           
  'Content-Type': 'text/html; charset=UTF-8',
  'Cache-Control': 'no-cache',
  'Connection': 'keep-alive',
  'Access-Control-Allow-Headers': 'origin, content-type, accept',
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': '*'});
 
    res.end('Some text');
  });

}).listen(8180);
