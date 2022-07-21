$('.carousel').carousel({
    interval : 1000
})

var slide_cont_status = 0;
$('.pauseplay_img').click(function(){
    if(slide_cont_status==0){
        $('#slider_item').carousel('pause');
        $('.pauseplay_img').fadeOut(100, function(){
            $('.pauseplay_img').attr('src','./img/slider/play.svg');
            $('.pauseplay_img').fadeIn(100);
        });
        
        slide_cont_status = 1;
    }else if(slide_cont_status==1){
        $('#slider_item').carousel('cycle');
        $('.pauseplay_img').fadeOut(100, function(){
            $('.pauseplay_img').attr('src','./img/slider/pause.svg');
            $('.pauseplay_img').fadeIn(100);
        })
        slide_cont_status = 0;
    }
})

$('.preview_button').click(function(){
    if(slide_cont_status==1){
        $('#slider_item').carousel('cycle');
        $('.pauseplay_img').fadeOut(100, function(){
            $('.pauseplay_img').attr('src','./img/slider/pause.svg');
            $('.pauseplay_img').fadeIn(100);
        })
        slide_cont_status = 0;
    }
})

$('.next_button').click(function(){
    if(slide_cont_status==1){
        $('#slider_item').carousel('cycle');
        $('.pauseplay_img').fadeOut(100, function(){
            $('.pauseplay_img').attr('src','./img/slider/pause.svg');
            $('.pauseplay_img').fadeIn(100);
        })
        slide_cont_status = 0;
    }
})