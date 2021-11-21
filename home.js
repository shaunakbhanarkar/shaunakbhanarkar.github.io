

$(document).ready(function () {

    $('#ux-tab').on('click' , function() {
        $('.tab-active').removeClass('tab-active');
        $('#ux-tab').addClass('tab-active');

        $('.project-container-js').addClass('hidden');
        $('#ux-projects').removeClass('hidden');
    });

    $('#branding-tab').on('click' , function() {
        $('.tab-active').removeClass('tab-active');
        $('#branding-tab').addClass('tab-active');

        $('.project-container-js').addClass('hidden');
        $('#branding-projects').removeClass('hidden');
    });

    $('#tech-tab').on('click' , function() {
        $('.tab-active').removeClass('tab-active');
        $('#tech-tab').addClass('tab-active');

        $('.project-container-js').addClass('hidden');
        $('#tech-projects').removeClass('hidden');
    });


});