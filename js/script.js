$(document).ready(function(){

	$('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
            console.log("added");
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
   $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
        	icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
           
        } else {
        	icon.addClass('ion-navicon-round');
		    icon.removeClass('ion-close-round');
        }        
    });
});