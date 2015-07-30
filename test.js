/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var request = require("request");
var fs = require('fs');
request('http://dimpidlogy.com.ua/app.json').pipe(
    fs.createWriteStream('data2.json')
);

