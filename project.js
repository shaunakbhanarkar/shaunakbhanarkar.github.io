var navigate = function(target){

    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);

};

$(document).ready(function () {

    $('#nav-background').on('click' , function() {
        navigate('#background');
    });

    $('#nav-problem').on('click' , function() {
        navigate('#problem');
    });

    $('#nav-solution').on('click' , function() {
        navigate('#solution');
    });

    $('#nav-design-process').on('click' , function() {
        navigate('#design-process');
    });

    $('#nav-research').on('click' , function() {
        navigate('#research');
    });

    $('#nav-conception-and-design').on('click' , function() {
        navigate('#conception-and-design');
    });

    $('#nav-testing').on('click' , function() {
        navigate('#testing');
    });

    $('#nav-final-prototype').on('click' , function() {
        navigate('#final-prototype');
    });

    $('#nav-top').on('click' , function() {
        navigate('#header');
    });


});