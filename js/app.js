$(document).foundation();

/* Custom JS ***************************************************************************/

// Accordion jump to top and animate
$(document).foundation('accordion', {
    callback: function (el){
        var containerPos = $(el).parent().offset().top;
        $('html, body').animate({scrollTop: containerPos}, 300);
    }
});

// Rotate chevrons on accordion
// Needs to be based on active state of panels
/*$('.accordion-navigation a').click(function(){
    $('img', this).toggleClass('down');
});*/