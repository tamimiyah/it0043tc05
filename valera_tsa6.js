var container = document.querySelector('.flex-container');
var resetButton = document.querySelector('.reset-button');
var growAllButton = document.querySelector('.grow-all-button');

function reset() {
    container.style = '';
    document.getElementById('gap').value = 0;
    document.getElementById('flexDirection').value = 'row';
    document.getElementById('justifyContent').value = 'start';
    document.getElementById('alignItems').value = 'start';
    document.getElementById('flexWrap').value = 'nowrap';
    document.getElementById('flexGrow').value = 0;
}

function gap(value) {
    let gapInput = document.getElementById("gap");
    if (container) {
        container.style.gap = value + `px`;
    }
}

function flexDir(direction) {
    container.style.flexDirection = direction;
}

function justifyContent(justifyContent) {
    container.style.justifyContent = justifyContent;
}

function alignItems(alignItems) {
    container.style.alignItems = alignItems;
}

function flexWrap(wrap) {
    container.style.flexWrap = wrap;
}

function resetFlexGrow() {
    flexGrow(0, 'box1');
    document.getElementById('box1-Grow').value = '';

    flexGrow(0, 'box2');
    document.getElementById('box2-Grow').value = '';


    flexGrow(0, 'box3');
    document.getElementById('box3-Grow').value = '';

}

function growAll() {
    flexGrow(1, 'box1');
    document.getElementById('box1-Grow').value = '';

    flexGrow(1, 'box2');
    document.getElementById('box2-Grow').value = '';


    flexGrow(1, 'box3');
    document.getElementById('box3-Grow').value = '';
}

document.addEventListener('DOMContentLoaded', function () {
    var resetButton = document.querySelector('.reset-button');
    var growAllButton = document.querySelector('.grow-all-button');

    resetButton.addEventListener('click', resetFlexGrow);
    growAllButton.addEventListener('click', growAll);
});



function flexGrow(value, boxId) {
    let box = document.getElementById(boxId);
    if (box) box.style.flexGrow = value;
}
