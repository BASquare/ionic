/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 $(document).ready(function(){
                //  $(".mob").scrollLeft();
                $('.show').click(function(){
                   $('.list_store').css('display','block');
                });
                $('.hide').click(function(){
                    $('.list_store').css('display','none');
                });
                $('.store2').click(function(){
                    $('.add_items').css('display','none');
                    $('.search').css('display','block');
                    $('.list_store').css('display','block');
                    $('.info').css('display','none');
                    $('.add_item_list').css('display','none');
                });
                 $('.store1').click(function(){
                    $('.add_item_list').css('display','block');
                    $('.add_items').css('display','block');
                    $('.search').css('display','none');
                    $('.list_store').css('display','none');
                    $('.info').css('display','none');
                });
                $('.store4').click(function(){
                    $('.add_items').css('display','none');
                    $('.search').css('display','none');
                    $('.list_store').css('display','none');
                    $('.info').css('display','block');
                    $('.add_item_list').css('display','none');
                });
               
             });

