$(document).ready(function(){
    $(".mobile_menu_icon").on('click', function(){
        $(this).toggleClass('active_menu');
        $('.mobile_menu ul li').slideToggle('slow', 'linear');
    })
});