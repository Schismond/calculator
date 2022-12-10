let computer, funcCpt , floatCpt , ANS ;
computer = funcCpt = floatCpt = ANS = 0;
let clicked = false;
let A,B,Operator;

let funcValue;
//Variables
let operation = document.getElementById("operation");
let screen = document.getElementById("screen");
let buttons = document.querySelectorAll('input');
let numbers = document.getElementsByClassName('number');
let funcBtn = document.getElementsByClassName('function-button');
let screenNum = document.getElementById("screen").innerText;
let equal = document.getElementById('equal');
let float = document.getElementById('point');
//writing function

for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener('click', () => {
        //zero conditions
        if(numbers[i].value==0 && computer == 0){
            computer--;
        }else if(computer<15 && computer == 0 ){
            screen.innerText = numbers[i].value;
        }else if(computer<15 && computer > 0 ){
            screen.innerText += numbers[i].value;
        }else if(computer>=15){
            screen.innerText = screen.innerText;
            computer--;
        }
        computer++;
        console.log(computer);
    });
};

for(let i=0;i<funcBtn.length;i++){
    funcBtn[i].addEventListener('click', () => {
        clicked = true ;
        if(computer == 0){
            screen.innerText ='0';
        }else if(computer > 0 && funcCpt == 0 ){
            console.log('is'+computer);
            funcValue = funcBtn[i].value;
            operation.innerText += screen.innerText + funcValue;
            funcCpt++;
            console.log('funcCpt=',funcCpt);
            computer = 0;
            A = screen.innerText;
            Operator = funcBtn[i].value;
            screen.innerText = '0';
        }else if(computer > 0 && funcCpt == 1 ){
            B = screen.innerText;
            //operation.innerText = ANS + funcValue;
            screen.innerText = '0';
            computer = 0;
            funcCpt--;
            floatCpt = 0;
           calculate(A,B,Operator);
        }else{
        screen.innerText = screen.innerText;
        }
    });
};

float.addEventListener('click', () => {

    if( screen.innerText =='0' && computer == 0 ){
        screen.innerText = '0.';
        floatCpt++;
        computer++;
    }
    else if( computer > 0 && floatCpt == 0 ){
        screen.innerText += '.';
        floatCpt++;
    } else if (computer > 0 && floatCpt == funcCpt){
        screen.innerText += '.';
        floatCpt++;
    }
    });

function calculate(A,B,Operator,ANS){
    console.log('A is '+ A);
    console.log('Operator is'+ Operator);
    console.log('B is '+ B);
    ANS=0;
 
        
    switch(true){
        case Operator == '+':
                console.log('ans value was'+ANS);
                ANS = Number(A) + Number(B);
                A = ANS;
                console.log('A become '+A+'now');
                console.log("+ answer is "+ANS);
                operation.innerText = ANS + funcValue;
              break;
        case Operator == '-':
                ANS += parseInt(A) - parseInt(B);
                console.log("- answer is "+ANS);
                operation.innerText =''+ ANS + funcValue;
          break;
    }
        
}
    