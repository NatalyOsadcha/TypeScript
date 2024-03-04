// SIMPLE TYPES
var num;
var str;
var bool;
var person = 'Max';
var empty;
var notParam;
num = 10;
num = -100;
str = 'Alan';
bool = true;
person = 'Kate';
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
