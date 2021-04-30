$(document).ready(function () {
    $('.slider__body').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 300000,
        arrows: false,
        respondTo: "slider",
        asNavFor: '.slider__adress'
    });
    $('.slider__adress').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 300000,
        dots: true,
        arrows: false,
        respondTo: "slider",
        asNavFor: '.slider__body'
    });
});