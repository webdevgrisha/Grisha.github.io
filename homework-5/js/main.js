'use strict';

let start = document.getElementById('start'),
    budget = document.getElementsByClassName('budget-value'),
    level = document.getElementsByClassName('level-value'),
    expenses = document.getElementsByClassName('expenses-value'),
    income = document.getElementsByClassName('income-value'),
    monthsavings = document.getElementsByClassName('monthsavings-value'),
    yearsavings = document.getElementsByClassName('yearsavings-value'),

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],

    optionalexpensesItems = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');


    let money, time;
    
function start() {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }

}
start();

    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses(){
            for (let i = 0; i < 2; i++) {
                let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
                    b = prompt ("Во сколько обойдется?", "");
            
                if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
                    appData.expenses[a] = b;
                } else {
                    i--;
                }   
            }
        },
    // Дневной бютжет
    detectDayBudget: function(){ 
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    },
    // Уровень достатка
    detectLevel: function(){ 
        if (appData.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Ошибочка...!");
        }
    },
    // Дипозит 
    checkSavings: function(){
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
                appData.monthIncome = save/100/12*percent;
                alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
        }
    },
    //  необязательные расходы
    chooseOptExpenses: function(){
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function(){
        let items = prompt("Что принесёт дополнитьльный доход ? (Перечислети через запятую)", " ");         
        if(typeof(items) != 'string' || typeof(items) == null || items == "" ){
            console.log("Вы вели не коректные данные!");
        }
        else{
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то ещё ?"));
            appData.income.sort();
        }
        appData.income.forEach(function(itemmassive, i){
            alert("Способы доп. зарабатка: " + (i + 1) + " - " + itemmassive);
        });
    }  
};

for(let key in appData){
    console.log("Наша программа включает в себя: " + key + " - " + appData[key]);
}