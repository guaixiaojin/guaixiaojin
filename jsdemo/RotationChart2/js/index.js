window.addEventListener('load', function() {
    const img = document.querySelector('.img');
    const imgs = img.querySelectorAll('img');
    const ol = document.querySelector('.circle');
    const aowl = document.querySelector('.aowl');
    const aowr = document.querySelector('.aowr');
    const boxWidth = document.querySelector('.box').offsetWidth;
    // var timer = setInterval(function() {
    //     aowr.click();
    // }, 5000);
    // 自动生成小圆圈
    let num = 0;
    let cur = 0;
    for (var i = 0; i < imgs.length; i++) {
        const li = document.createElement('li');
        ol.appendChild(li);
        li.setAttribute('index', i);
        li.addEventListener('click', function() {
            for (let i = 0; i < ol.children.length; i++) {
                // imgs[i].style.display = 'none';
                ol.children[i].className = "";
            }
            this.className = "current";
            let index = li.getAttribute('index');
            // imgs[index].style.display = 'block';
            animate(img, -index * boxWidth);
            num = cur = index
        })
        ol.children[0].className = 'current';
    }
    const li = img.children[0].cloneNode(true);
    img.appendChild(li);
    // const liend = img.children[imgs.length - 1].cloneNode(true);
    // img.insertBefore(liend, first);
    // 右按钮
    aowr.addEventListener('click', function() {
        if (num == imgs.length) {
            num = 0;
            img.style.left = 0 + 'px';
        }
        cur++;
        for (var j = 0; j < ol.children.length; j++) {
            ol.children[j].className = '';
        }
        if (cur == ol.children.length) {
            cur = 0;
        }
        ol.children[cur].className = 'current';
        num++;
        animate(img, -num * boxWidth);
    });
    // 左按钮
    aowl.addEventListener('click', function() {
        if (num == 0) {
            num = imgs.length;
            img.style.left = -num * boxWidth + 'px';
        }
        for (var j = 0; j < ol.children.length; j++) {
            ol.children[j].className = '';
        }
        if (cur == 0) {
            cur = ol.children.length;
        }
        cur--;
        ol.children[cur].className = 'current';
        // imgs[num].style.display = 'block';
        num--;
        animate(img, -num * boxWidth);
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