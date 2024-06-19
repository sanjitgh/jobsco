// owl_carousel

$(document).ready(function(){
    $(".service_carousel").owlCarousel({
        items:4,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed:1000,
        dots:false,
        center:true,
        responsive : {
          0 : {
             items:1,
          },
          600 : {
            
          },
         768 : {
          items:3,
       },
       992 : {
        
     },
      }
    });
  });

$(document).ready(function(){
    $(".testimonial_carousel").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed:1000,
    });
  });

// ///////////

		
$(document).ready(function(){"use strict";
	
//Scroll back to top

var progressPath = document.querySelector('.progress-wrap path');
var pathLength = progressPath.getTotalLength();
progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
var updateProgress = function () {
  var scroll = $(window).scrollTop();
  var height = $(document).height() - $(window).height();
  var progress = pathLength - (scroll * pathLength / height);
  progressPath.style.strokeDashoffset = progress;
}
updateProgress();
$(window).scroll(updateProgress);	
var offset = 50;
var duration = 550;
jQuery(window).on('scroll', function() {
  if (jQuery(this).scrollTop() > offset) {
    jQuery('.progress-wrap').addClass('active-progress');
  } else {
    jQuery('.progress-wrap').removeClass('active-progress');
  }
});				
jQuery('.progress-wrap').on('click', function(event) {
  event.preventDefault();
  jQuery('html, body').animate({scrollTop: 0}, duration);
  return false;
})


});
