window.addEventListener('load', function() {
    const img = document.querySelector('.img');
    const imgs = img.querySelectorAll('img');
    const ol = document.querySelector('.circle');
    const aowl = document.querySelector('.aowl');
    const aowr = document.querySelector('.aowr');
    let num = 0;
    var timer = setInterval(function() {
        aowr.click();
    }, 5000);
    // 自动生成小圆圈
    for (var i = 0; i < imgs.length; i++) {
        const li = document.createElement('li');
        ol.appendChild(li);
        li.setAttribute('index', i);
        li.addEventListener('click', function() {
            for (let i = 0; i < ol.children.length; i++) {
                imgs[i].style.display = 'none';
                imgs[i].style.animation = 'indexdown 0.7s linear';
                ol.children[i].className = "";
            }
            let index = li.getAttribute('index');
            imgs[index].style.display = 'block';
            imgs[index].style.animation = 'index 0.7s linear';
            this.className = "current";
            num = index
        })
        ol.children[0].className = 'current';
    }
    // 右按钮
    aowr.addEventListener('click', function() {
        num++;
        if (num == imgs.length) {
            num = 0;
        }
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.display = 'none';
            imgs[i].style.animation = 'indexdown 0.7s linear';
        }
        imgs[num].style.animation = 'index 0.7s linear';
        imgs[num].style.display = 'block';
        for (var j = 0; j < ol.children.length; j++) {
            ol.children[j].className = '';
        }
        ol.children[num].className = 'current';
    });
    // 左按钮
    aowl.addEventListener('click', function() {
        if (num == 0) {
            num = imgs.length - 1;
        } else {
            num--;
        }
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.display = 'none';
            imgs[i].style.animation = 'indexdown 0.7s linear';
        }
        for (var j = 0; j < ol.children.length; j++) {
            ol.children[j].className = '';
        }
        ol.children[num].className = 'current';
        imgs[num].style.animation = 'index 0.7s linear';
        imgs[num].style.display = 'block';
    });
    const cdd = document.getElementsByClassName('cdd')[0];
    const lis = cdd.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function() {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            this.className = 'current';
        }
    }
})