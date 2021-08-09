


var navigate = function(target){

    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);

};

$(document).ready(function () {

    $('#nav-top').on('click' , function() {
        navigate('#header');
    });


});


