// SIMPLE TYPES

let num: number;
let str: string;
let bool: boolean;
let person = 'Max';
let empty: null;
let notParam: undefined;

num = 10;
num = -100;
str = 'Alan';
bool = true;
person = 'Kate';
empty = null;
notParam = undefined;


// ARRAY

let arr: string[] = [];
arr = ['string', 'true']

let arrNumber: number[] = [];
arrNumber = [1, 5, -9];

let arrAny: any[];
arrAny = [1, true, 'string', null, {}];

let arrObject: { name: string }[];
arrObject = [{ name: 'Alex' }, { name: 'Ann' }];


// OBJECT

let obj: { name: string};
obj = { name: 'Mike' };
obj.name;


let db: {
    id: number;
    title: string;
    info?: {
        date: Date;
        isNew?: boolean;
    }
};

db = {
    id: 1,
    title: 'New product',
    info: {
        date: new Date(),
    }
};

// ANY

let some: any;

some = -1000;
some = true;
// some = { name: 'Ann' };
some.name;

let number: number;

number = some;


// UNKNOWN

let something: unknown;

something = 7;
something = 'cow';

let string: string;

// string = something; /// error

if (typeof something === 'string') {
    string = something;
};


// TUPLE

let fixed: [string, number];

fixed = ['Alan', 45];

fixed.push('new');
fixed.pop();


// ENUM

enum Toggle { ENABLE, DISABLE};

const service = {
status: Toggle.ENABLE,
};

if (service.status === Toggle.ENABLE) {
    console.log('It is active')
};


// UNION TYPE

let union: string | number | boolean;
union = -98;
union = 'kiwi';

function combine(param1: string | number, param2: string | number) {
    if (typeof param1 === 'string' || typeof param2 === 'string') {
        return param1.toString() + param2.toString();
    }
    return param1 + param2;
}

console.log(combine(8, 'snow'));
console.log(combine(3, 7));


// LITERAL TYPE

let active: 'start' | 'end';

active = 'start';

/////

const fruit:string[] = [];

function workWithArr(arr: string[], value:string, action: 'add' | 'delete') {
    if (action === 'add') {
        arr.push(value);
    } else {
        const index = arr.indexOf(value);
        arr.splice(index, 1);
    }
    return arr;
};

workWithArr(fruit, 'banana', 'add');
workWithArr(fruit, 'lemon', 'add');
workWithArr(fruit, 'melon', 'add');

console.log(fruit);

workWithArr(fruit, 'lemon', 'delete');

console.log(fruit);