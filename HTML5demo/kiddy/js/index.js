window.addEventListener('load', function() {
    var ul = document.querySelector('.curcul');
    var li = ul.querySelectorAll('li');
    var ol = document.querySelector('.curcle');
    var box = document.querySelector('.cilent-swiper');
    var aowwr = document.querySelector('.aowwr');
    var boxwidth = box.offsetWidth;
    var num = 0;
    var cur = 0;
    for (var i = 0; i < li.length; i++) {
        var olli = document.createElement('li');
        olli.setAttribute('index', i);
        ol.appendChild(olli);
        olli.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'curter'
            var index = this.getAttribute('index');
            animate(ul, -index * boxwidth);
            num = cur = index;
        });
        ol.children[0].className = 'curter';
    }
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    setInterval(function() {
        aowwr.click();
    }, 5000);
    aowwr.addEventListener('click', function() {
        if (num == ul.children.length - 1) {
            num = 0;
            ul.style.left = 0 + 'px';
        }
        cur++;
        if (cur == ol.children.length) {
            cur = 0;
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[cur].className = 'curter';
        num++;
        animate(ul, -num * boxwidth);

    })

});

$(function() {
    $('.nav>ul').children().mouseenter(function() {
        $(this).children('.mark').stop().animate({
            width: 100 + '%'
        }, 1000);
    });
    $('.nav>ul').children().mouseleave(function() {
        $(this).children('.mark').stop().animate({
            width: 0 + '%'
        }, 500);
    });
})