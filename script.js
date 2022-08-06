var div1 = create('div', 'container-fluid  mt-5 ml-5 p-5 ');

let bg = document.querySelector('body');



var divarr = createElements('div', 'offset-md-2 offset-sm-1 row text-md-center text-sm-left h4 mb-0', 6);

var input = create('input', 'col-8 border-10 border-light text-right mt-5 mb-1');
input.setAttribute('type', 'text');
input.disabled = true;
input.setAttribute('style', `line-height:60px; background-color:orange; font-family: 'Brush Script MT', cursive;`);
input.id = "display";

var btn = createElements('button', 'btn-fluid btn-dark text-md-center text-sm-left text-xs-left p-md-3 p-sm-4 p-xs-4 col-2', 10);
btn[0].setAttribute('onclick', "appendNumber(0)");
btn[1].setAttribute('onclick', `appendNumber(1)`);
btn[2].setAttribute('onclick', `appendNumber(2)`);
btn[3].setAttribute('onclick', `appendNumber(3)`);
btn[4].setAttribute('onclick', `appendNumber(4)`);
btn[5].setAttribute('onclick', `appendNumber(5)`);
btn[6].setAttribute('onclick', `appendNumber(6)`);
btn[7].setAttribute('onclick', `appendNumber(7)`);
btn[8].setAttribute('onclick', `appendNumber(8)`);
btn[9].setAttribute('onclick', `appendNumber(9)`);

var add = createButton('+', '+', `appendNumber('+')`);
var sub = createButton('-', '-', `appendNumber('-')`);
var mul = createButton('x', 'X', `appendNumber('*')`);
var division = createButton('&#247;', '/', `appendNumber('/')`);
var cube = createButton('x<sup>3</sup>', 'cube', 'power3()')
var square = createButton('x<sup>2</sup>', 'square', 'power2()')
var equals = createButton('=', '=', 'equate()');
var root = createButton('&radic;', 'root', 'sqrRoot()');
var dot = createButton('.', '.', `appendNumber('.')`);
var clear = createButton('c', 'c', 'clearScreen()');


document.body.append(div1);
div1.append(divarr[0], divarr[1], divarr[2], divarr[3], divarr[4], divarr[5]);
divarr[0].append(input);
divarr[1].append(cube,square, root, dot,clear );
divarr[2].append(btn[7], btn[8], btn[9], division);
divarr[3].append(btn[4], btn[5], btn[6], mul);
divarr[4].append(btn[1], btn[2], btn[3], sub);
divarr[5].append( btn[0], dot, equals,add);

function create(element, classname) {
    var ap = document.createElement(element);
    ap.setAttribute('class', classname);
    return ap;
}

function createElements(element, classname, num) {
    let elem = [];
    for (let i = 0; i < num; i++) {
        var b = document.createElement(element);
        b.setAttribute('class', classname);
        b.setAttribute('style', `  font-family: 'Brush Script MT', cursive;`);
        if (element === 'button') {
            b.setAttribute('value', i);
            b.innerHTML = i;
        }
        elem.push(b);
    }
    return elem;
}

function createButton(txt, val, fn) {
    let a = document.createElement('button');
    a.setAttribute('class', 'btn-fluid btn-dark text-md-center text-sm-left text-xs-left p-md-3 p-sm-4 p-xs-4 col-2');
    a.setAttribute('value', val);

    a.innerHTML = txt;
    a.setAttribute('onclick', fn);
    return a;
}


function appendNumber(val) {
    input.value += val;
}


function equate() {
    input.value = Number.isInteger(eval(input.value)) ? eval(input.value) : eval(input.value).toFixed(2);
}

function sqrRoot() {
    if (input.value) {
        let val = parseFloat(eval(input.value))
        input.value = Math.sqrt(val).toFixed(2);
    }
}

function power3() {
    if (input.value) {
        let val = parseFloat(eval(input.value))
        input.value = Math.pow(val, 3).toFixed(2);
    }
}

function power2() {
    if (input.value) {
        let val = parseFloat(eval(input.value))
        input.value = Math.pow(val, 2).toFixed(2);
    }
}

function clearScreen() {
    input.value = "";
}