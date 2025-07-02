$(function () {
  $(".t-j-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,

    cssEase: "linear",
    prevArrow: ".t-j-gallery-list-left",
    nextArrow: ".t-j-gallery-list-right",
  });
});

$(function () {
  $(".t-j-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".t-j-reviews-list-left",
    nextArrow: ".t-j-reviews-list-right",
  });
});
