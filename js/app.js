'use strict';

//TODO Task 1
const field = document.querySelector('#field');

document.addEventListener('click', function (e) {
    let coordsField = field.getBoundingClientRect();
    let {x, y, width, height, top, right, bottom, left} = coordsField;
    console.warn(coordsField);
    console.warn(x, y, width, height, top, right, bottom, left);

    console.group("Координаты поля");
    console.log('Координаты клика', e.clientX + ':' + e.clientY);
    console.log('1 угол', `${left}:${top}`);
    console.log('2 угол', `${right}:${bottom}`);
    console.log('3 угол', `${x + field.clientLeft}:${y + field.clientTop}`);
    console.log('4 угол', `${right - field.clientLeft}:${bottom - field.clientTop}`);
    console.groupEnd("Координаты поля");
});
//TODO Task 1










