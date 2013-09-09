var slideShow = $('#slideshow');
var slideShowId;
var slideShowRunning = false;
var transitionEffect;

$(document).ready(function(){

    // Initial hat slide hover effect
    $('#hatsStatic .content a').hover(function(){
        $(this).siblings().css('background-position','0 -240px');
    },function(){
        $(this).siblings().css('background-position','0 0');
    });


    // Determin transition effect
    if ($.browser.msie == true && ($.browser.version == '7.0' || $.browser.version == '8.0')) {
        transitionEffect = 'none';
    } else {
        transitionEffect = 'fade';
    }


    // Overall slideshow
    slideShow.cycle({
        fx          : transitionEffect,
        pager       : '#slideshow-paging',
        timeout     : 0,
        cleartype   : true,
        cleartypeNoBg:true,
        onPagerEvent:resetSlideshowCounter
    });
    startSlideshow();



    // Pause/Resume slideshow during mouse hover
    slideShow.mouseenter(function(){ pauseSlideshow(); });
    slideShow.mouseleave(function(){ startSlideshow(); });

});


// Pause the current slideshow
function pauseSlideshow() {
    slideShowRunning = false;
    clearInterval(slideShowId);
}

// Start the slideshow & counter
function startSlideshow() {
    if (slideShowRunning) return true;
    slideShowRunning = true;
    slideShowId = setInterval(function(){
        slideShow.cycle('next');
    },7500);
}

// Restart the slideshow counter
function resetSlideshowCounter(){
    pauseSlideshow();
    startSlideshow();
}