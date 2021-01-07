// slider
$('.slider').slick({
    autoplay: false,
    dots: true,
    arrows: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 1200,
    variableWidth: false,
    fade: true,
});
// go to top
// jQuery(function($) {
//     $(".ft-top").hide();
//     $(window).on("scroll", function() {
//         if ($(this).scrollTop() > 800) {
//             $(".ft-top").fadeIn("fast");
//         } else {
//             $(".ft-top").fadeOut("fast");
//         }
//         scrollHeight = $(document).height();
//         scrollPosition = $(window).height() + $(window).scrollTop();
//         footHeight = $("footer").innerHeight();
//         if (scrollHeight - scrollPosition <= footHeight) {
//             $(".ft-top").css({
//                 "position": "absolute",
//                 "bottom": footHeight - 430
//             });
//         } else {
//             $(".ft-top").css({
//                 "position": "fixed",
//                 "bottom": "30px"
//             });
//         }
//     });
//     $('.top-btn').click(function() {
//         $('body,html').animate({
//             scrollTop: 0
//         }, 400);
//         return false;
//     });
// });