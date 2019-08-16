'use strict';

let  money = +prompt("Ваш бюджет на месяц?", ""),
     time = prompt("Введите дату в формате YYYY-MM-DD", "");

// for (let g = 0 ; g < 1; g++){
//     let  money = +prompt("Ваш бюджет на месяц?", ""),
//          time = prompt("Введите дату в формате YYYY-MM-DD", "");
//     if ( (typeof(g)) != null && g != ''){
//          console.log("good");
//         appData.budget[money];
//         appData.timeData[time];
//     } else{
//         console.log("error");
//         g--;
//     }
// }

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "",
    income: [],
    saving: false
};


for (let i = 0 ; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    
    if ((typeof(a))=== 'string' && (typeof(b))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;  
    } else{
        console.log("bad result");
        i--;
    } 
}


// первый способ цикл while
// let i = 0;
// while (i < 2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
    
//     if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.lenght < 50){
//         console.log("done");
//         appData.expenses[a] = b;
//     } else{
//         console.log("bad result");
//         i--;
//     }
//     i++;
// }

// второй способ цикл do ... while
// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if ((typeof(a))=== 'string' && (typeof(b))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
//         console.log("done");
//         appData.expenses[a] = b;
//     } else{
//         console.log("bad result");
//         i--;
//     }
//     i++;
// }
// while( i < 2);



appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бютжет:"  + appData.moneyPerDay);

if (appData.moneyPerDay < 100){
    console.log("Минемальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Средний уровень достатка ");
} else if (appData.moneyPerDay > 2000){
    console.log("Высокий уровень достатка");
} else{
    console.log("Произошла ошибка");
}
