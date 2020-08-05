/* Slider vertical  fuente https://kenwheeler.github.io/slick/*/
$('.slider').slick({
    dots: true,
    vertical: true
});

/* MENU */
$(".toggleBtn").on('click', function(){
    $(this).toggleClass("toggleBtnActive");
    $(".menu ul").slideToggle();
});