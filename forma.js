/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var http = require('http');
var request = require("request");
var querystring = require('querystring');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
 
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
       
  'Content-Type': 'text/html; charset=UTF-8',
  'Cache-Control': 'no-cache',
  'Connection': 'keep-alive',
  'Access-Control-Allow-Headers': 'origin, content-type, accept',
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': '*'});
  
    res.end('Some text');
  }).listen(8180);;


