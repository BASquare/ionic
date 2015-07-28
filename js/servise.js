/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('starter.some',[])
        .factory('People',function(){
            
       var peoples = [{
               id:1 ,
               name:'Patric',
               hello:'Niceday today!',
               face:'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
       },
       {       id:2 ,
               name:'Petro',
               hello:'I have good mood today!',
               face:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
           },
           {
               id:1 ,
               name:'Roma',
               hello:'Fine day!',
               face:'https://lh3.googleusercontent.com/-P_ZkL7FbYqs/AAAAAAAAAAI/AAAAAAAAAFM/8DvKJrOtGlg/s120-c/photo.jpg'
           }];
              return{
               all: function(){
             return peoples;      
               }
           };
        });


