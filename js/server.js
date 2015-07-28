/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var httpReq = new plugin.HttpRequest();

$(".title").click(function() {
    httpReq.getJSON("http://dimpidlogy.com.ua/app.json", function(status, data) {
      alert(JSON.stringify(data));
    });
  });