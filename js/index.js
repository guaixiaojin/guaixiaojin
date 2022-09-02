$(function() {
    var demo = document.querySelectorAll('.demo');
    $.get('./index.json', function(res) {
        res.worksHTML5.forEach((item, i) => {
            clones(item, 1);
        });

        // worksCSS3.forEach((item, i) => {
        //     clones(item, 2);
        // })
        res.worksCSS3.forEach((item, i) => {
            clones(item, 2);
        });

        res.worksJS.forEach((item, i) => {
            clones(item, 3);
        });

    })

    function clones(item, n) {
        var div = document.createElement('div');
        div.style.backgroundImage = 'url(' + item.picture + ')';
        div.classList.add('works');
        var a = document.createElement('a');
        a.href = item.url;
        var div2 = document.createElement('div');
        div2.classList.add('title');
        var p = document.createElement('p');
        p.innerHTML = item.title;
        div2.appendChild(p);
        a.appendChild(div2);
        div.appendChild(a);
        // console.log(div);
        demo[n].children[0].appendChild(div)
    }
    $('.cat').on('click', function() {
        $(this).prop('disabled', false);
        if (document.querySelector('.nav').classList.contains('open')) {
            $('.nav').removeClass('open');
            var id = setTimeout(function() {
                $('.headSculpture>img').css({
                    transform: 'translateY(-50px)'
                })
                $('.headSculpture>p').css({
                    transform: 'translateX(200px)'
                })
                $('.option ul').children('li:odd').css({
                    transform: 'translateX(220px)'
                })
                $('.option ul').children('li:even').css({
                    transform: 'translateX(-220px)'
                })
                $('cat').prop('disabled', true);
            }, 400);
            clearTimeout(ids);
        } else {
            $('.nav').addClass('open');
            $('.headSculpture>img').css({
                transform: 'translateY(0px)'
            })
            $('.headSculpture>p').css({
                transform: 'translateX(0px)'
            })
            var ids = setTimeout(function() {
                $('.option ul').children('li:odd').css({
                    transform: 'translateX(0px)'
                })
                $('.option ul').children('li:even').css({
                    transform: 'translateX(0px)'
                })
                $('cat').prop('disabled', true);
            }, 400);
            clearTimeout(id);
        }
        // console.log(document.querySelector('.nav').classList.contains('open'));
    });
    $('.option ul li a').on('click', function() {
        var index = $(this).parent().index();
        $('.demo').eq(index).css({
            opacity: 1,
            'z-index': 999
        }).siblings('.demo').css({
            opacity: 0,
            'z-index': -1
        })
    });
    $('.footer ul li').on('click', function() {
        var index = $(this).index()
        $(this).parents('.header').addClass('activeheader').siblings().addClass('activemain').children().eq(index).addClass('activeli');
    });
    $('.intro-top i').on('click', function() {
        $(this).parents().parent().removeClass("activeli").parent().removeClass('activemain').siblings().removeClass('activeheader');
    });
});