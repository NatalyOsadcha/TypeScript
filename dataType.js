"use strict";
// SIMPLE TYPES
let num;
let str;
let bool;
let user = 'Max';
let empty;
let notParam;
num = 10;
num = -100;
str = 'Alan';
bool = true;
user = 'Kate';
empty = null;
notParam = undefined;
// ARRAY
let arr = [];
arr = ['string', 'true'];
let arrNumber = [];
arrNumber = [1, 5, -9];
let arrAny;
arrAny = [1, true, 'string', null, {}];
let arrObject;
arrObject = [{ name: 'Alex' }, { name: 'Ann' }];
// OBJECT
let obj;
obj = { name: 'Mike' };
obj.name;
let db;
db = {
    id: 1,
    title: 'New product',
    info: {
        date: new Date(),
    }
};
// ANY
let some;
some = -1000;
some = true;
// some = { name: 'Ann' };
some.name;
let number;
number = some;
// UNKNOWN
let something;
something = 7;
something = 'cow';
let string;
// string = something; /// error
if (typeof something === 'string') {
    string = something;
}
;
// TUPLE
let fixed;
fixed = ['Alan', 45];
fixed.push('new');
fixed.pop();
// ENUM
var Toggle;
(function (Toggle) {
    Toggle[Toggle["ENABLE"] = 0] = "ENABLE";
    Toggle[Toggle["DISABLE"] = 1] = "DISABLE";
})(Toggle || (Toggle = {}));
;
const service = {
    status: Toggle.ENABLE,
};
if (service.status === Toggle.ENABLE) {
    console.log('It is active');
}
;
// UNION TYPE
let union;
union = -98;
union = 'kiwi';
function combine(param1, param2) {
    if (typeof param1 === 'string' || typeof param2 === 'string') {
        return param1.toString() + param2.toString();
    }
    return param1 + param2;
}
console.log(combine(8, 'snow'));
console.log(combine(3, 7));
// LITERAL TYPE
let active;
active = 'start';
/////
const fruit = [];
function workWithArr(arr, value, action) {
    if (action === 'add') {
        arr.push(value);
    }
    else {
        const index = arr.indexOf(value);
        arr.splice(index, 1);
    }
    return arr;
}
;
workWithArr(fruit, 'banana', 'add');
workWithArr(fruit, 'lemon', 'add');
workWithArr(fruit, 'melon', 'add');
console.log(fruit);
workWithArr(fruit, 'lemon', 'delete');
console.log(fruit);
/// RETURN TYPE
function print() {
    console.log('Some message');
}
//// returns nothing
function add(num1, num2) {
    return num1 + num2;
}
//// returns something
function customError() {
    throw new Error('Some error');
}
/// never finishing
/// Example
function createServerPerson(name) {
    return eval(`
    (()=>{
        return {
            name:'${name}'
        }
    })()`);
}
function createPerson(name) {
    return createServerPerson(name);
}
const person = createPerson('Alex');
console.log(person);
/// FUNCTION TYPE
let foo;
foo = () => {
    console.log('Some text');
};
function calculate(num1, num2, callback) {
    return callback(num1, num2);
}
;
function minus(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
const result = calculate(1, 3, minus);
const multiplyResult = calculate(2, 7, multiply);
console.log(result);
console.log(calculate(10, 5, minus));
console.log(multiplyResult);
console.log(calculate(3, 3, multiply));
const person1 = {
    name: 'Egle',
    age: 32,
    showName() {
        console.log(this.name);
    }
};
const person2 = {
    name: 'Pole',
    showName() {
        console.log(this.name);
    }
};
person1.showName();
person2.showName();
