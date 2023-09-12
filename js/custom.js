$(function () {

    $('#Main__content').fullpage({
        anchors: ['mv', 'mc', 'md', 'mb', 'ft'],
        navigation: false,
        css3: false,
        //반응형에서 fullpage 안하기.
        responsiveWidth: 700,
        //넘치는 부분 스크롤 하기.
        //scrollOverflow: true,
        //아랜 속도 부분... https://jqueryui.com/easing/ 참고.
        //easing: 'easeOutBounce',
        //easingCss3: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        afterRender: function () {
            $('.Main__content .section').eq(0).addClass('on');
        },
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            // $('.gnb li').eq(idx - 1).addClass('on').siblings().removeClass('on');
            $('.Main__content .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
            if (idx == 1) {
                $('#header').removeClass('on')
            } else {
                $('#header').addClass('on')
            }
        },
        onLeave: function (idx, nidx, dir) {
            $('.gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            console.log(idx, nidx, dir);



        }
    });



    $('.visual__slide').on('init afterChange', function (e, s, idx) {
        const current = $('.visual__slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.main__visual .dots__').addClass('on');
        $('.main__visual .dots__ span').text(idx ? "0" + (idx + 1) : "01");
        $('.main__visual .dots__ strong').text("0" + s.slideCount);

    });

    $('.visual__slide').on('beforeChange', function () {
        $('.main__visual .dots__').removeClass('on');
    });

    $('.visual__slide').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
    });




    $('.preminu__slide').on('init afterChange', function (e, s, idx) {
        const current = $('.preminu__slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });



    $('.preminu__slide').slick({
        arrows: false,
        slidesToShow: 4,
        //speed: 100,
        pauseOnHover: false,
        pauseOnFocus: false,
    });


    $('.main__premium .arrows .left__arrow').on('click', function () {
        $('.preminu__slide').slick('slickPrev')
    });
    $('.main__premium .arrows .right__arrow').on('click', function () {
        $('.preminu__slide').slick('slickNext')
    });


    //clone menu

    const NB = $('.gnb .nb').clone();
    console.log(NB);
    //clone 한 것을 넣기
    $('.all__nb').append(NB);

    $('.all__nb--btn').on('click', function () {
        $('.all__nb .nb').toggleClass('on');
    })




})