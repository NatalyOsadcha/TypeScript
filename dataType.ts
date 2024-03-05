// SIMPLE TYPES

let num: number;
let str: string;
let bool: boolean;
let user = 'Max';
let empty: null;
let notParam: undefined;

num = 10;
num = -100;
str = 'Alan';
bool = true;
user = 'Kate';
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


/// RETURN TYPE

function print():void {
    console.log('Some message');
} 
//// returns nothing

function add(num1:number, num2:number):number {
    return num1 + num2;
}  

//// returns something

function customError():never {
    throw new Error('Some error');
}

/// never finishing


/// Example

function createServerPerson(name: string) {
    return eval(`
    (()=>{
        return {
            name:'${name}'
        }
    })()`)
}

function createPerson(name:string):{name:string} {
    return createServerPerson(name);
}

const person = createPerson('Alex');
console.log(person);



/// FUNCTION TYPE


let foo: (param1:number, param2:string)=>void;

foo = () => { 
    console.log('Some text')
};

function calculate (num1:number, num2:number, callback:(arg1:number, arg2:number)=>number) {
    return callback(num1, num2)
};

function minus(num1: number, num2:number) {
    return num1 - num2;
}

function multiply(num1: number, num2: number) {
    return num1 * num2;
}

const result = calculate(1, 3, minus);
const multiplyResult = calculate(2, 7, multiply);

console.log(result);
console.log(calculate(10, 5, minus));
console.log(multiplyResult);
console.log(calculate(3, 3, multiply));


/// CUSTOM TYPES

type PersonType = {
    readonly name: string;
    age?: number;
    showName: () => void;
}

const person1: PersonType = {
    name: 'Egle',
    age: 32,
    showName() {
        console.log(this.name)
    }
};

const person2: PersonType = {
    name: 'Pole',
    showName() {
        console.log(this.name);
    }
};

person1.showName();
person2.showName();

