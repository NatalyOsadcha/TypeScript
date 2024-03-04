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


// Array

let arr: string[] = [];
arr = ['string', 'true']

let arrNumber: number[] = [];
arrNumber = [1, 5, -9];

let arrAny: any[];
arrAny = [1, true, 'string', null, {}];

let arrObject: { name: string }[];
arrObject = [{ name: 'Alex' }, { name: 'Ann' }];


// Object

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

// Any

let some: any;

some = -1000;
some = true;
// some = { name: 'Ann' };
some.name;

let number: number;

number = some;


// Unknown

let something: unknown;

something = 7;
something = 'cow';

let string: string;

// string = something; /// error

if (typeof something === 'string') {
    string = something;
};


// Tuple

let fixed: [];







