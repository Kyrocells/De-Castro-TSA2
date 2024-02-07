let buttons = document.querySelectorAll('.button'); 
let boxes = document.querySelectorAll('.box');
let i = -1;

function showBox(index) {
    if (i !== -1) {
        boxes[i].style.transition = 'top 0.5s, opacity 0.5s';
        boxes[i].style.top = '-150px';
        boxes[i].style.opacity = '0';
    }

    boxes[index].style.transition = 'top 0.5s, opacity 0.5s';
    boxes[index].style.top = '200px';
    boxes[index].style.opacity = '1';
    i = index;
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        showBox(i);
    });
}
