'use strict';

let  money = prompt("Ваш бюджет на месяц?", "");
let  time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {"a1" : "a2"},
    optionalExpenses: "",
    income: [],
    saving: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a2 = prompt("Во сколько обойдется?", ""),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a4 = prompt("Во сколько обойдется?", "");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);

console.log(money);
console.log(time);
console.log(appData.budget);
console.log(appData.timeData);
console.log(appData.expenses);
console.log(appData.saving);
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);