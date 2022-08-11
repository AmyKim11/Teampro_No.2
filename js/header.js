// header 스크롤시 배경 색 변화
let bgColor = ["#FFFF","transparent"];
let fontColor = ["#000000","#FFFF"];
let filter = ["none", "invert(100%) sepia(100%) saturate(2%) hue-rotate(190deg) brightness(102%) contrast(101%)"];
let bgUrl = ["url('./img/nav/hamburger_menu_black.svg')", "url('./img/nav/hamburger_menu.svg')"];
$(document).ready(function(){
   $(window).scroll(function(){
     const scroll = $(window).scrollTop();
     if (scroll > 1) {
        changeStyle(bgColor[0], fontColor[0], filter[0], bgUrl[0]);
     }
     else{
      changeStyle(bgColor[1], fontColor[1], filter[1], bgUrl[1]);
     }
   })
 })

 function changeStyle(bg, font, filter, bgImg){
      let header = $("header");
      let navText = $(".nav-text li a");
      let ciImg =  $(".ci-logo img");
      let backImg = $(".hamburger-menu");
      header.css("background" , bg);
      navText.css("color" , font);
      ciImg.css("filter" , filter);
      backImg.css("background-image" , bgImg);
 }