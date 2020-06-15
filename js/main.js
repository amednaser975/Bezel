/*global $, window , document, setInterval, clearInterval, console */

$(".navbar").css({
      backgroundColor: "transparent",
      boxShadow: "none"
    });
// Change Coloring Properties of Navbar On Scrolling
$(window).on('scroll',function () {

  if ($(this).scrollTop() >= 40) {
    $(".navbar").css({
      backgroundColor: "#FFF",
      boxShadow: "0px 6px 9px 0px rgba(0,0,0,.1)",
      top:'0'
    });
    $(".navbar-toggler span").css('backgroundColor','#333');
    $(".navbar-brand img").attr("src", "images/logo-dark.png");
    $(".navbar-brand,.navbar-collapse ul li a").css("color", "#333");
    $('.navbar .navbar-nav li').css('paddingTop','.6rem');
    $('.navbar .navbar-nav li').css('paddingBottom','.6rem');
    $('.navbar .navbar-nav:last-child').css('border-left-color','rgba(0, 0, 0, 0.4)');
  
  } else {
    
    $(".navbar").css({
      backgroundColor: "transparent",
      boxShadow: "none"
    });
    $(".navbar-toggler span").css('backgroundColor','#FFF');
    $(".navbar-brand img").attr("src", "images/logo-light.png");
    $(".navbar-brand,.navbar-collapse ul li a").css("color", "#FFF");
    $('.navbar .navbar-nav:last-child').css('border-left-color','rgba(255, 255, 255, 0.2)');
  }
})
$(".navbar-toggler").click(function (){
  $(".navbar").css({
    "backgroundColor": "#fff",
    "color": "#333"
  });
  $(".navbar-brand img").attr("src", "images/logo-dark.png");
  $(".navbar-brand,.navbar-collapse ul li a").css("color", "#333");
  $(".navbar-toggler span").css('backgroundColor','#333');
})
// Scroll To Top button
var scrollToTop = $("#back-to-top");
var offsetTopAbout = $('#about').offset().top;
$(window).scroll(function() {
  if ($(window).scrollTop() >= offsetTopAbout) {
    if (scrollToTop.is(":hidden")) {
      scrollToTop.css("display", "block");
    }
  } else {
    scrollToTop.css("display", "none");
  }
});
$("#back-to-top").click( function () {

  $('html, body').animate({scrollTop: 0}, 1000);
})


$('.nav-link').click(function () {

  let linkHref = $(this).attr('href');
  let sectionOffset = $(linkHref).offset().top;
  $('html, body').animate({scrollTop: sectionOffset}, 1000);
  var arr = document.getElementsByClassName('nav-item');
  arr.forEach = Array.prototype.forEach;
  arr.forEach(function (element) { 
    element.firstElementChild.classList.remove('active2');
  })
  $(this).addClass('active2');
})
// Add Active link on Element when reaching its Section
$(window).scroll( function () {

  let hrefOfLink;

    $('.block').each(function (index, element) {

        hrefOfLink = $(element).attr('id');

        if($(window).scrollTop() > $(this).offset().top - 400)
        {
          var arr = document.getElementsByClassName('nav-item');
          arr.forEach = Array.prototype.forEach;
          arr.forEach(function (element) { 
            element.firstElementChild.classList.remove('active2');
          })
          $('.nav-item').removeClass('active2');
          $(`a[href="#${hrefOfLink}"]`).addClass('active2');
        }
    })

})