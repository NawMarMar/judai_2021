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
//// slider for cast members
var $status = $('.cast-numbers');
var $slickElement = $('.person-list');

$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + ' / ' + slick.slideCount);
});

$slickElement.slick({
    slide: 'li',
    autoplay: false,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1200,
    variableWidth: false,
    slidesToShow: 6,
    slide: 'li',
    slidesToScroll: 1,
    accessibility: false,
    centerPadding: '0',
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '30%',
        }
    }]
});
// menu
$('.menu-trigger,.menu-list li a').on('click', function() {
    $('.menu-trigger').toggleClass('active');
    $('body').toggleClass('noscroll');
    $('.menu-list').toggleClass('toggle');
});
// go to top
jQuery(function($) {
    $(".ft-top").hide();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 600) {
            $(".ft-top").fadeIn("fast");
        } else {
            $(".ft-top").fadeOut("fast");
        }
        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $(".footer").innerHeight();
        if (scrollHeight - scrollPosition <= footHeight) {
            $(".ft-top").css({
                "position": "absolute",
                "bottom": footHeight - 400
            });
        } else {
            $(".ft-top").css({
                "position": "fixed",
                "bottom": "30px"
            });
        }
    });
    $('.top-btn').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

// openning

// $('body').addClass('no-scroll');

// let num = 0;
// let num2 = 0;
// let total = 0;
// let positionIndex = 0;
// let bgPositionX = ['481px', '570px', '600px', '-400px', '-550px', '200px'];
// let bgPositionY = ['189px', '-150px', '-580px', '-200px', '-550px', '-482px'];

// var w_width = $(window).width();
// console.log(w_width);
// if (w_width < 1600 && w_width > 1200) {
//     bgPositionX = ['400px', '400px', '470px', '170px', '-470px', '-270px'];
//     bgPositionY = ['160px', '-120px', '-400px', '-400px', '-400px', '-100px'];
// } else if (w_width <= 1200 && w_width > 768) {
//     bgPositionX = ['300px', '300px', '300px', '50px', '-350px', '-310px', '-310px'];
//     bgPositionY = ['210px', '-10px', '-220px', '-190px', '-190px', '-10px', '200px'];
// } else if (w_width <= 768 && w_width > 600) {
//     bgPositionX = ['70px', '200px', '200px', '-200px', '-950px', '-650px', '-950px'];
//     bgPositionY = ['270px', '0px', '-350px', '-300px', '-300px', '0px', '250px'];
// } else if (w_width <= 600 && w_width > 375) {
//     bgPositionX = ['0px', '70px', '70px', '-200px', '-800px', '-600px', '-750px'];
//     bgPositionY = ['200px', '0px', '-250px', '-200px', '-200px', '0px', '200px'];
// } else if (w_width <= 375 && w_width > 350) {
//     bgPositionX = ['0px', '70px', '70px', '-150px', '-700px', '-600px', '-750px'];
//     bgPositionY = ['150px', '0px', '-170px', '-200px', '-200px', '0px', '200px'];
// } else if (w_width <= 350) {
//     bgPositionX = ['0px', '70px', '70px', '-150px', '-600px', '-450px', '-570px'];
//     bgPositionY = ['150px', '0px', '-170px', '-200px', '-150px', '0px', '150px'];
// }

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// document.onreadystatechange = function(e) {
//     check_ready_state();
//     check_ready_state_ani();
// }

// async function check_ready_state() {
//     if (document.readyState == "interactive") {
//         var all = document.getElementsByTagName("*");
//         for (var i = 0, max = all.length; i < max; i++) {
//             set_ele(all[i]);
//             await sleep(2);
//         }
//         if (num < 100) {
//             for (var j = num; j <= 100; j++) {
//                 if (j < 10) {
//                     $('.num').html('00' + j);
//                 } else if (j < 100) {
//                     $('.num').html('0' + j);
//                 } else {
//                     $('.num').html('' + j);
//                 }
//                 num++;
//                 await sleep(1);
//             }
//         }
//     }
// }

// async function check_element(ele) {
//     var all = document.getElementsByTagName("*");
//     var per_inc = 100 / (all.length);
//     if ($(ele).on()) {
//         total = per_inc + total;
//         num = Math.round(total);
//         if (num < 10) {
//             $('.num').html('00' + num);
//         } else if (num < 100) {
//             $('.num').html('0' + num);
//         } else {
//             $('.num').html('' + num);
//         }
//     } else {
//         set_ele(ele);
//     }
// }

// async function set_ele(set_element) {
//     check_element(set_element);
// }

// async function check_ready_state_ani() {
//     if (document.readyState == "interactive") {
//         var all = document.getElementsByTagName("*");
//         for (var i = 0, max = all.length; i < max; i++) {
//             if (num < 95) {
//                 set_ele_ani(all[i]);
//                 $('.loading-img').css('background-position-x', bgPositionX[positionIndex]);
//                 $('.loading-img').css('background-position-y', bgPositionY[positionIndex]);
//                 $('.loading-img').addClass('animate__zoomIn');
//                 await sleep(200);
//                 $('.loading-img').css('background-position-x', bgPositionX[positionIndex]);
//                 $('.loading-img').css('background-position-y', bgPositionY[positionIndex]);
//                 $('.loading-img').removeClass('animate__zoomIn');
//                 await sleep(200);
//                 positionIndex++;
//                 if (positionIndex >= bgPositionY.length) {
//                     positionIndex = 0;
//                 }
//             }
//         }
//         $('.loading-img').css('transform', 'scale(1,1)');
//         $('.loading-img').css('opacity', '1');
//         $('.loading-img').css('transition', '');
//         $('.loading-img').animate({
//             'backgroundPositionX': '0%',
//             'backgroundPositionY': '0%',
//         }, 100, function() {
//             $('.loading').css('transition', '1000ms');
//             $('.loading').animate({ opacity: 1 }, 300, function() {
//                 $('.loading').addClass('animate__zoomOut');
//                 $('.loading').animate({ opacity: 0 }, 300, function() {
//                     $('.loading').remove();
//                     $('body').removeClass('no-scroll');
//                 });
//             });
//         });
//     }
// }

// async function check_element_ani(ele) {
//     if ($(ele).on()) {} else {
//         set_ele_ani(ele);
//     }
// }

// async function set_ele_ani(set_element) {
//     check_element_ani(set_element);
// }

var instagram = new instagram("IGQVJVblNCR0RKb2xGWjJVQnFueE5zT2t4SlppSkt3a2hvWnFzZAXJveHVTV3ptNjdKRWhnV1ZArdzdWSXlZAUVJscGdnZAGhzTm5OWHZAZAaHBHajgwX0E2MV8zMVlGM0hIaEpraDVscmlR");

instagram.user.media({

}, function(res) {
    let format, layout = '';
    for (let i = 0; i < res.length; i++) {
        format = '<li>';
        format += '<a href="' + res[i]['permalink'] + '" target="_blank"><img src="' + res[i]['media_url'] + '"></a>';
        format += '</li>';
        layout += format;
    }
    document.querySelector('#instagram-data').innerHTML = layout;
});