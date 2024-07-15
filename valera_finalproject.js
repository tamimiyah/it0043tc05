$(window).scroll(function() {
    var top_of_element = $("#Home").offset().top;
    var bottom_of_element = $("#Home").offset().top + $("#Home").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        // the element is visible, add the animation class
        $("#Home").addClass("animate");
    } else {
        // the element is not visible, remove the animation class
        $("#Home").removeClass("animate");
    }
});
