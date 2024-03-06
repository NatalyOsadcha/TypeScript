let personAge: number;
personAge = 50;
let personName: string;
personName='Max'
let toggle: boolean;
toggle = true;
let nothing: null;
nothing = null;
let notInitialize: undefined;
notInitialize = undefined;
let callback = (a: number) => number;
callback = (a) => { return 100 + a };



let anything: any;
anything= -20;
anything = 'Text';
anything = {};


let thing:unknown;
thing = 'Text';

let row: string;

if (typeof some === 'string') {
    row = some;
}


let persons: [string, number];
persons = ['Max', 21];

// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).

enum Load { LOADING, READY };

const page = {
    load: Load.READY,
}

if (page.load === Load.LOADING) {
    console.log('Page is loading');
}
 
if (page.load === Load.READY) {
    console.log('Page loaded')
}



// Сделайте переменную, которая может принимать или строку или число.

let item: string | number;


// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'


let literal: 'enable' | 'disable';


////////////////

function showMessage (message:string):void {
  console.log(message);
}


function calc(num1:number, num2:number):number {
  return num1 + num2;
}

function customsError():never {
  throw new Error('Error');
}



type Page= {
    title: string;
    likes: number;
    accounts: string[];
    status: 'open'|'close';
    details?: {
        createAt: Date;
        updateAt: Date;
    }

}
const page1:Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}