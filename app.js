let inputUserName = prompt("Введите ваше имя:");// Имя пользователя
// Если пользователь не написал свое имя
function errorName() {
    if(inputUserName===""){
            confirm("Введите свое имя")
            inputUserName = prompt("Введите ваше имя:");
    }else if(inputUserName.length < 3){
        confirm("Слишком короткое имя");
        inputUserName = prompt("Введите ваше имя:");
    };
};

while(inputUserName==="" || inputUserName.length < 3){
    errorName();
};
    


let inputUserNum = prompt("Введите число от 1 до 6: "); // Число пользователя
let intNumber = parseInt(inputUserNum);

while(intNumber > 6 || intNumber===NaN){
    inputUserNum = prompt("Введите число от 1 до 6: ");
    intNumber = parseInt(inputUserNum);
}

let userBalance = document.querySelector(".balance"); // class Баланс

let balance = 5000; //Начальный Баланс

let randomNum = document.querySelector(".random-num"); // class число-рандом

let startRandomNum = 0; //Начальное значение рулетки

let userNum = document.querySelector(".user-num"); // class Число пользователя



let howMuchCredit = 0;

userBalance.innerHTML = "Ваш Баланс: " + balance;

randomNum.innerHTML = "Выпавшее число: " + startRandomNum;

userNum.innerHTML = "Вашe Число: " + intNumber;




//Работа Казино
function start() {
    setTimeout( //Работа Казино
        function casino() {
            startRandomNum = Math.random() * 6; // Рандомное число 
            let intengerRandom = parseInt(startRandomNum);
            if (balance > 0) {
                if (intengerRandom === 1, 2, 4, 5, 6 && intengerRandom !== 3) {
                    if (intengerRandom === intNumber) {
                        balance += 500;
                        randomNum.innerHTML = "Вам выпало число: " + intengerRandom;
                        userBalance.innerHTML = "Ваш Баланс: " + balance;
                    } else {
                        balance -= 250;
                        randomNum.innerHTML = "Вам выпало число: " + intengerRandom;
                        userBalance.innerHTML = "Ваш Баланс: " + balance;
                    };
                } else if (intNumber === 3) {
                    if (intengerRandom === intNumber) {

                        balance += 1000;
                        randomNum.innerHTML = "Вам выпало число: " + intengerRandom;
                        userBalance.innerHTML = "Ваш Баланс: " + balance;
                    } else {
                        balance -= 250;
                        randomNum.innerHTML = "Вам выпало число: " + intengerRandom;
                        userBalance.innerHTML = "Ваш Баланс: " + balance;
                    };
                }
            } else {
                userBalance.innerHTML = "Не достаточно денег на счете. Ваш баланс: " + balance;
            }

        }, 1000);

};
// Очистка Счета
function giveCash() {
    document.innerHTML = confirm(inputUserName + " вывел " + balance + "UAH");
    balance = 0;
    userBalance .innerHTML = "Ваш Баланс: " + balance;
    console.log("Жми!!!");
};

//Кредит
function credit() {
    howMuchCredit++;
    if(howMuchCredit <= 3){
        balance += 5000;
        userBalance.innerHTML = "Ваш Баланс: " + balance;
    } else {
        userBalance.innerHTML = "Использовано максимальное кол-во Кредита";
    }
    
};

//Новое Число
function newNum() {
    inputUserNum = prompt("Введите число: ");
    intNumber = parseInt(inputUserNum);
    userNum.innerHTML = "Вашe Число: " + intNumber;
};


