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
        mark.style.left = 50 + this.index * 122 + 'px';
    }
}