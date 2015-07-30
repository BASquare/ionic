/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var request = require('request');
var rand = Math.floor(Math.random()*100000000).toString();

request({
  method: 'POST',
  uri: 'http://dimpidlogy.com.ua/app.json',
  multipart: [
    {
      'content-type': 'application/json',
      'body': JSON.stringify({
        foo: 'bar',
        _attachments: {
          'message.txt': {
            follows: true,
            length: 18,
            'content_type': 'text/plain'
           }
         }
       })
    },
    { body: 'I am an attachment' }
  ]
}, function (error, response, body) {
  if(response.statusCode == 201){
    console.log('document saved as: http://dimpidlogy.com.ua/app.json');
  } else {
    console.log('error: '+ response.statusCode);
    console.log(body);
  }
});