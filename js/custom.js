$(function () {
    $('#Main__content').fullpage({
        anchors: ['mv', 'mc', 'md', 'mb', 'ft'],
        navigation: false,
        css3: false,
        responsiveWidth: 700,
        afterRender: function () {
            $('.Main__content .section').eq(0).addClass('on');
        },
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            $('.Main__content .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
            if (idx == 1) {
                $('#header').removeClass('on');
            } else {
                $('#header').addClass('on');
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
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main__premium .arrows .left__arrow').on('click', function () {
        $('.preminu__slide').slick('slickPrev');
    });

    $('.main__premium .arrows .right__arrow').on('click', function () {
        $('.preminu__slide').slick('slickNext');
    });

    const NB = $('.gnb .nb').clone();
    console.log(NB);
    $('.all__nb').append(NB);

    $('.all__nb--btn').on('click', function () {
        $('.all__nb .nb').toggleClass('on');
    });
});