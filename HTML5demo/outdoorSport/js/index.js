window.addEventListener('load', function() {
    var boxshow = document.querySelectorAll('.boxshow');
    var texta = document.querySelectorAll('.text-li');
    for (var i = 0; i < texta.length; i++) {
        texta[i].setAttribute('text', i);
        texta[i].addEventListener('mousemove', function() {
            texted = this.getAttribute('text');
            animate(boxshow[texted], 0);
        })
        texta[i].addEventListener('mouseout', function() {
            texted = this.getAttribute('text');
            animate(boxshow[texted], -150);
        })
    }

    // 头部轮播图
    var header = document.querySelector('.header-bottom-nav');
    var aowwl = document.querySelector('.aowwl');
    var aowwr = document.querySelector('.aowwr');
    var headerWidth = header.offsetWidth;
    var num = 0
    var ul = header.querySelector('ul');
    var uli = ul.children[0].cloneNode(true);
    ul.appendChild(uli);
    aowwr.addEventListener('click', function() {
        if (num == ul.children.length - 1) {
            num = 0;
            ul.style.left = 0;
        }
        num++;
        animate(ul, -num * headerWidth);
    })
    aowwl.addEventListener('click', function() {
        if (num == 0) {
            num = ul.children.length;
            ul.style.left = -num * headerWidth;
        }
        num--;
        animate(ul, -num * headerWidth);
    })
    setInterval(function() {
        aowwr.click();
        cantactA.click();
    }, 5000);
    // 底部轮播图
    var contact = document.querySelector('.contact-left');
    var contactul = contact.querySelector('ul');
    var ol = document.querySelector('.circle');
    var cantactA = document.querySelector('.contact-a');
    var contactWidth = contact.offsetWidth;
    for (let i = 0; i < ul.children.length - 1; i++) {
        var li = document.createElement('li');
        var div = document.createElement('div');
        div.innerHTML = i + 1;
        li.appendChild(div);
        li.setAttribute('contact-list', i);
        ol.appendChild(li);
        ol.children[0].className = 'current';
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            var index = this.getAttribute('contact-list');
            this.className = 'current';
            numcontact = cursut = index
            animate(contactul, -index * contactWidth);
        })
    }
    var numcontact = 0;
    var cursut = 0;
    cantactA.addEventListener('click', function() {
        if (numcontact == contactul.children.length - 1) {
            numcontact = 0;
            contactul.style.left = 0;
        }
        numcontact++;
        cursut++;
        if (cursut == ol.children.length) {
            cursut = 0;
        }
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[cursut].className = 'current';
        animate(contactul, -numcontact * contactWidth);
    })
})