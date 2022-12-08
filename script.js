let computer = 0;
let funcCpt = 0;
//Variables
let operations = document.getElementById("operation");
let screen = document.getElementById("screen");
let buttons = document.querySelectorAll('input');
let numbers = document.getElementsByClassName('number');
let funcBtn = document.getElementsByClassName('function-button')
//writing function

for(let i=0;i<funcBtn.length;i++){
    funcBtn[i].addEventListener('click', () => {
        funcCpt++;
        computer++;
        console.log(computer);
        if(computer<20 && funcCpt <= 1){
        screen.innerText += funcBtn[i].value;
        }else{
        screen.innerText = screen.innerText;
        }
    });
};
//writing numbers

for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener('click', () => {
        computer++;
        console.log(computer);
        if(computer<20){
        screen.innerText += numbers[i].value;
        }else{
        screen.innerText = screen.innerText;
        }
    });
};
