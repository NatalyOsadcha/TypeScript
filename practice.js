"use strict";
let personAge;
personAge = 50;
let personName;
personName = 'Max';
let toggle;
toggle = true;
let nothing;
nothing = null;
let notInitialize;
notInitialize = undefined;
let callback = (a) => number;
callback = (a) => { return 100 + a; };
let anything;
anything = -20;
anything = 'Text';
anything = {};
let thing;
thing = 'Text';
let row;
if (typeof some === 'string') {
    row = some;
}
let persons;
persons = ['Max', 21];
// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
;
const page = {
    load: Load.READY,
};
if (page.load === Load.LOADING) {
    console.log('Page is loading');
}
if (page.load === Load.READY) {
    console.log('Page loaded');
}
// Сделайте переменную, которая может принимать или строку или число.
let item;
// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
let literal;
////////////////
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customsError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
