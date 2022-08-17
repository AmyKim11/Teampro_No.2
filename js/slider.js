let slide_cont_status = 0;
const slider = $('.carousel_inner');
const switch_button_time = 100;
const img_path = "./img/slider/"
const pause_button = $('.pauseplay_img');

$(document).ready(function(){
    slider.slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: $('.preview_button'),
        nextArrow: $('.next_button')
    });

    pause_button.click(switch_playpause);
    
    $('.preview_button').click(switch_button_img);

    $('.next_button').click(switch_button_img);

})



function switch_playpause(){
    
    if(slide_cont_status==0){
        slider.slick('slickPause')
        pause_button.fadeOut(switch_button_time, function(){
        pause_button.attr('src', img_path+'play.svg');
        pause_button.fadeIn(switch_button_time);
        })

        slide_cont_status=1;
    }else if(slide_cont_status==1){
        slider.slick('slickPlay')
        pause_button.fadeOut(switch_button_time, function(){
        pause_button.attr('src', img_path+'pause.svg');
        pause_button.fadeIn(switch_button_time);
        })

        slide_cont_status=0;
    }
};

function switch_button_img(){
    if(slide_cont_status==1){
        slider.slick('slickPlay')
        pause_button.fadeOut(switch_button_time, function(){
        pause_button.attr('src', img_path+'pause.svg');
        pause_button.fadeIn(switch_button_time);
        })

        slide_cont_status=0;
    }
}