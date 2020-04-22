'use strict';

//TODO Task 1
const field = document.querySelector('#field');

document.addEventListener('click', function (e) {
    let coordsField = field.getBoundingClientRect();
    let {x, y, width, height, top, right, bottom, left} = coordsField;
    // console.table(coordsField);

    console.group("Координаты поля");
    console.log('Координаты клика', e.clientX + ':' + e.clientY);
    console.log('1 угол', `${left}:${top}`);
    console.log('2 угол', `${right}:${bottom}`);
    console.log('3 угол', `${x + field.clientLeft}:${y + field.clientTop}`);
    console.log('4 угол', `${right - field.clientLeft}:${bottom - field.clientTop}`);
    console.groupEnd("Координаты поля");
});
//TODO Task 1

//TODO Task 2
const div2 = document.querySelector('.task2');
const buttonShowNotes = document.querySelector('.task2 button');
const blockquote = document.querySelector('.task2 blockquote');

buttonShowNotes.addEventListener('click', () => {
    showNote(blockquote, "top", "note above");
    showNote(blockquote, "bottom", "note below");
    showNote(blockquote, "right", "note at the right");
    showNote(blockquote, "left", "bottom right");
});


function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.innerHTML = html;
    note.className = 'note';
    div2.append(note);

    positionAt(anchor, position, note);
}

function positionAt(anchor, position, elem) {
    const coordsBlockquote = getCoords(anchor); // получим все нужные нам координаты в виде объекта

    if (position == 'top') {
        elem.style.cssText = `
                            top: ${coordsBlockquote.pageTop - elem.offsetHeight}px;
                            left: ${coordsBlockquote.left}px;
                         `;
    }
    if (position == 'bottom') {
        elem.style.cssText = `
                            left: ${coordsBlockquote.left}px;
                            top: ${coordsBlockquote.pageBottom}px;
                         `;
    }
    if (position == 'right') {
        elem.style.cssText = `
                            left: ${coordsBlockquote.right}px;
                            top: ${coordsBlockquote.pageTop}px;
                         `;
    }
    if (position == 'left') {
        elem.style.cssText = `
                            left: ${coordsBlockquote.right - elem.offsetWidth}px;
                            top: ${coordsBlockquote.pageBottom}px;
                         `;
    }

    // console.warn('window.pageYOffset', currentYScrollout);
    // console.warn('documentElement', document.documentElement.scrollTop);
}

//* функция для получения координат элемента, как относительных окна и документа(свои рассчёты координат)
function getCoords(elem) {
    const currentYScrollout = window.pageYOffset;
    const coordsElem = elem.getBoundingClientRect();
    let {x, y, width, height, top, right, bottom, left} = coordsElem;

    const obj = {
        pageTop: top + currentYScrollout,
        pageBottom: bottom + currentYScrollout,

        x: x,
        y: y,
        width: width,
        height: height,
        top: top,
        right: right,
        bottom: bottom,
        left: left,
    };
    // console.warn(obj);
    return obj;
}
//TODO Task 2










