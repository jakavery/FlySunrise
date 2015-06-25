$(document).foundation();

/* Custom JS ***************************************************************************/

// Accordion jump to top and animate
$(document).foundation('accordion', {
    callback: function (el){
        var containerPos = $(el).parent().offset().top;
        $('html, body').animate({scrollTop: containerPos}, 300);
    }
});

// Switch to vertical tabs for large screen sizes
switchTabs();
$(window).resize(switchTabs);
function switchTabs() {
    if ($(window).width() > 1024) {
        $('#individual-programs ul.tabs').addClass('vertical');
    }
    else {
        $('#individual-programs ul.tabs').removeClass('vertical');
    }
}
// Equalized accordion
/*$('#individual-programs-list a').click(function() {
    Foundation.libs.equalizer.reflow();
});*/

// Rotate chevrons on accordion
// Needs to be based on active state of panels
/*$('.accordion-navigation a').click(function(){
    $('img', this).toggleClass('down');
});*/