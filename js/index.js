

// html dom 이 다 로딩된 후 실행된다.    
$(document).ready(function(){
   // menu 클래스 바로 하위에 있는 태그를 클릭했을때        
   $(".hamburger-menu").click(function(){
     let hidenave = $(".hide-nave");
      let submenu = $(".hide-nav-texts");
      if(hidenave.css("display") == "none"){
        hidenave.slideDown();
        submenu.slideDown();
      }
      else{
        hidenave.slideUp();
        submenu.slideUp();
      }
   });
});

