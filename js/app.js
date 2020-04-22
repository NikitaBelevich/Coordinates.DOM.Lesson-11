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
const buttonShowExternalNotes = document.querySelector('.task2 button:nth-of-type(1)');
const buttonShowInternalNotes = document.querySelector('.task2 button:nth-of-type(2)');
const blockquote = document.querySelector('.task2 blockquote');

buttonShowExternalNotes.addEventListener('click', () => {
    showNote(blockquote, "top-out", "note above");
    showNote(blockquote, "bottom-out", "note below");
    showNote(blockquote, "right-out", "note at the right");
    showNote(blockquote, "left-out", "bottom right");
});
buttonShowInternalNotes.addEventListener('click', () => {
    showNote(blockquote, "top-in", "note top-in");
    showNote(blockquote, "bottom-in", "note bottom-in");
    showNote(blockquote, "right-in", "note at the right-in");
    showNote(blockquote, "left-in", "note at the left-in");
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


    switch (position) {
        case 'top-out':
            elem.style.cssText = `
                            top: ${coordsBlockquote.pageTop - elem.offsetHeight}px;
                            left: ${coordsBlockquote.left}px;
                         `;
            break;
        case 'bottom-out':
            elem.style.cssText = `
                            left: ${coordsBlockquote.left}px;
                            top: ${coordsBlockquote.pageBottom}px;
                         `;
            break;
        case 'right-out':
            elem.style.cssText = `
                            left: ${coordsBlockquote.right}px;
                            top: ${coordsBlockquote.pageTop}px;
                         `;
            break;
        case 'left-out':
            elem.style.cssText = `
                            left: ${coordsBlockquote.right - elem.offsetWidth}px;
                            top: ${coordsBlockquote.pageBottom}px;
                         `;
            break;

        //TODO Позиционирование внутренних заметок ---------------------------
        case 'top-in':
            elem.style.cssText = `
                            top: ${coordsBlockquote.pageTop}px;
                            left: ${coordsBlockquote.left}px;
                         `;
            break;
        case 'bottom-in':
            elem.style.cssText = `
                            left: ${coordsBlockquote.left}px;
                            top: ${coordsBlockquote.pageBottom - elem.offsetHeight}px;
                         `;
            break;
        case 'right-in':
            elem.style.cssText = `
                            left: ${coordsBlockquote.right - elem.offsetWidth}px;
                            top: ${coordsBlockquote.pageTop}px;
                         `;
            break;
        case 'left-in':
            elem.style.cssText = `
                            left: ${coordsBlockquote.right - elem.offsetWidth}px;
                            top: ${coordsBlockquote.pageBottom - elem.offsetHeight}px;
                         `;
            break;
    }
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
    return obj;
}
//TODO Task 2










