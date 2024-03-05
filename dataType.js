// SIMPLE TYPES
var num;
var str;
var bool;
var user = 'Max';
var empty;
var notParam;
num = 10;
num = -100;
str = 'Alan';
bool = true;
user = 'Kate';
empty = null;
notParam = undefined;
// ARRAY
var arr = [];
arr = ['string', 'true'];
var arrNumber = [];
arrNumber = [1, 5, -9];
var arrAny;
arrAny = [1, true, 'string', null, {}];
var arrObject;
arrObject = [{ name: 'Alex' }, { name: 'Ann' }];
// OBJECT
var obj;
obj = { name: 'Mike' };
obj.name;
var db;
db = {
    id: 1,
    title: 'New product',
    info: {
        date: new Date(),
    }
};
// ANY
var some;
some = -1000;
some = true;
// some = { name: 'Ann' };
some.name;
var number;
number = some;
// UNKNOWN
var something;
something = 7;
something = 'cow';
var string;
// string = something; /// error
if (typeof something === 'string') {
    string = something;
}
;
// TUPLE
var fixed;
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
var service = {
    status: Toggle.ENABLE,
};
if (service.status === Toggle.ENABLE) {
    console.log('It is active');
}
;
// UNION TYPE
var union;
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
var active;
active = 'start';
/////
var fruit = [];
function workWithArr(arr, value, action) {
    if (action === 'add') {
        arr.push(value);
    }
    else {
        var index = arr.indexOf(value);
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
    return eval("\n    (()=>{\n        return {\n            name:'".concat(name, "'\n        }\n    })()"));
}
function createPerson(name) {
    return createServerPerson(name);
}
var person = createPerson('Alex');
console.log(person);
/// FUNCTION TYPE
var foo;
foo = function () {
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
var result = calculate(1, 3, minus);
var multiplyResult = calculate(2, 7, multiply);
console.log(result);
console.log(calculate(10, 5, minus));
console.log(multiplyResult);
console.log(calculate(3, 3, multiply));
var person1 = {
    name: 'Egle',
    age: 32,
    showName: function () {
        console.log(this.name);
    }
};
var person2 = {
    name: 'Pole',
    showName: function () {
        console.log(this.name);
    }
};
person1.showName();
person2.showName();
