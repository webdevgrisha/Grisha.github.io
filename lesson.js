// деректива js6
'use strict';

// Переменные и их типы
var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj ={};

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);

let persone = {
    name: "Mark",
    age: 30,
    isMarried: false
};

console.log(persone.name);
console.log(persone["age"]);
console.log(persone.isMarried);

// Масив 
let arr = ['erotik.png','animal-mark.jpg','dog.webp'];

console.log(arr[2]);
console.log(arr[1]);
console.log(arr[0]);

// Обшение с пользователем
alert("Hello Nigga!");

let answer = confirm("Are you here?");
console.log(answer);

// Модальное окно с полем для ввода
// let text = prompt("Тебе есть 18 шалун ?", "Да");

// console.log(text);

let text = +prompt("Тебе есть 18 шалун ?", "Да");

console.log(typeof(text));
// Проверка на тип данных

console.log(typeof(arr));

// Операторы в js
console.log("arr" + " - object");
console.log(4 + " - object");
// инкримент и декримент
let incr = 11,
    decr = 11;
// Префексная форма
  console.log(++incr);
  console.log(--decr);
// Постфексная форма
console.log(incr++);
console.log(decr--);
// Остаток от деления
console.log(6%4);
// = -знак присваевания , == -проверка на равенство , == -проверка на равенство , === -ситрогая проверка на тип данных.
console.log("2" == 2);
console.log("2" === 2);
// логические операторы "&&" и "||";
// &&-и
let = isChecked = true,
      isClouse = true;

console.log(isChecked && isClouse);

let = isTrue = true,
      isFalse = false;

console.log(isTrue && isFalse);
// ||-или
let = isbad = true,
      isgood = false;

console.log(isbad || isgood);

let = isbad = false,
      isgood = false;

console.log(isbad || isgood);

// оператор отрецания - !
console.log(isbad || !isgood);

let = isbad = false,
      isgood = false;
