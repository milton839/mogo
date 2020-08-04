$(function(){

    
// counter js
$('.counter').counterUp({
        delay: 10,
        time: 1000
});   
//counter js    

//slide in/slide out    
$('#scrlldwn').click(function(){
    $('.txt').slideToggle(500);
    autoplay
});    
$('#scrlldwn2').click(function(){
    $('.txt2').slideToggle(500);
});     
$('#scrlldwn3').click(function(){
    $('.txt3').slideToggle(500);
});     

//slider js start    
//$('.slider-main').slick({
//  slidesToShow: 1,
//  slidesToScroll: 1,
//  autoplay: true,
//  speed:1000,
//  arrows:true,
//  prevArrow:'.left',
//  nextArrow:'.right',
//  autoplaySpeed: 3000,
//});    

    
    
//animation scroll js
var html_body = $('html, body');
$('.nav-link').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 70
            }, 1500);
            return false;
        }
    }
});        
    
  

$(window).scroll(function(){

    var scrolling = $(this).scrollTop();

    if(scrolling > 200){
       $('.navbar').addClass('bg');
       }
    else{
        $('.navbar').removeClass('bg');
    }
     
    if(scrolling >300){
        $('.backtop').fadeIn();
    }
    else{
        $('.backtop').fadeOut();
    }
  
    
    

});
    
$('.backtop').click(function(){
   $('html,body').animate ({ scrollTop:0 },1500)
});    
    
    
    
    
    
    
    
    
    
    
    
    
    
});