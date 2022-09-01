$(function() {
    $('.box-top ul li').click(function() {
        $(this).addClass('current').siblings().removeClass('current');
        $('.box-bottom ul li').eq($(this).index()).show().siblings().hide();
    })
    var flag = true;
    $('.light').click(function() {
        if (flag) {
            $(this).css('backgroundColor', '#ddd');
            $('.light-button').css('backgroundColor', 'black').stop().animate({
                left: 58,
            }, 500, "swing");
            $(document.body).css('backgroundColor', 'black').addClass('bodc')
            return flag = false;
        } else {
            $(this).css('backgroundColor', 'black');
            $('.light-button').css('backgroundColor', 'white').stop().animate({
                left: 4,
            }, 500, "swing");
            $(document.body).css('backgroundColor', 'white').removeClass('bodc')
            return flag = true;
        }
    })
})