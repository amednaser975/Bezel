/*global $, window , document, setInterval, clearInterval, console */


// Change Coloring Properties of Navbar On Scrolling
$(window).scroll(function () {
  console.log($(this).scrollTop())
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
    $('.navbar .navbar-nav li').css('paddingTop','1.4rem');
    $('.navbar .navbar-nav li').css('paddingBottom','1.4rem');
    $('.navbar .navbar-nav:last-child').css('border-left-color','rgba(255, 255, 255, 0.2)');
  }
})

if ($(".navbar").width() < 700) {

  $(".navbar").css({
    backgroundColor: "#FFF",
    boxShadow: "0px 6px 9px 0px rgba(0,0,0,.1)"
  });
  $(".navbar-brand img").attr("src", "images/logo-dark.png");
  $(".navbar-brand,.navbar-collapse ul li a").css("color", "#333");

} else {

  $(".navbar").css({
    backgroundColor: "transparent",
    boxShadow: "none"
  });
  $(".navbar-brand img").attr("src", "images/logo-light.png");
  $(".navbar-brand,.navbar-collapse ul li a").css("color", "#FFF");
}
$(".navbar-toggler span").click(function (){
  $(".navbar").css("backgroundColor", "#333")
})