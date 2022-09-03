var circle = document.querySelector('.circle');
var text = circle.innerText;
circle.innerText = '';
for (var i = 0; i < text.length; i++) {
    var letter = text[i];
    console.log(letter);
    // console.log(text[1]);
    var span = document.createElement('span');
    span.innerText = letter;
    var r = (360 / text.length) * i;
    span.style.transform = "rotate(" + r + "deg)";
    circle.appendChild(span);
}