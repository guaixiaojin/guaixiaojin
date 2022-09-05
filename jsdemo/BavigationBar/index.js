var bar = document.querySelectorAll('.bar');
var mark = document.querySelector('.mark');
for (var i = 0; i < bar.length; i++) {
    bar[i].index = i
    bar[i].onclick = function() {
        for (var i = 0; i < bar.length; i++) {
            bar[i].classList.remove('active');
        }
        this.classList.add('active');
        // console.log(mark.style.left);
        mark.style.left = 50 + this.index * 125 + 'px';
    }
}


var list = document.querySelectorAll('.list');
var ul = document.querySelector('.navigation>ul');
var indicator = document.querySelector('.indicator');
console.log(ul);
for (var i = 0; i < list.length; i++) {
    list[i].title = i;
    list[i].onclick = function() {
        for (var i = 0; i < list.length; i++) {
            ul.children[i].className = 'list'
        }
        var title = this.title
        ul.children[title].className = 'list active';
        indicator.style.left = 15 + (title * 80) + 'px';
    }
}

$('.box2 ul li').mouseenter(function() {
    $(this).stop().animate({
        width: 224,
    }, 200).find('.small').stop().fadeOut().siblings('.big').stop().fadeIn()
    $(this).siblings().stop().animate({
        width: 70
    }, 200).find('.small').stop().fadeIn().siblings('.big').stop().fadeOut();
})