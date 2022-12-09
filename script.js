let computer = 0;
let funcCpt = 0;
let floatCpt = 0;
let clicked = false;
let A;
let Operator;
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

/*

let T=[];
for(let j=0;j<funcBtn.length;j++){
    T[j]= funcBtn[j].value;
}

for(let i=0;i<funcBtn.length;i++){
    funcBtn[i].addEventListener('click', () => {
        if(computer == 0 && funcCpt == 0){
            screen.innerText ='';
        } else if(computer > 0 && funcCpt == 0){
            console.log('is'+computer);
            clicked = true ;
            screen.innerText += funcBtn[i].value;
            computer = computer-1;
            funcCpt++;
            console.log('cpt is'+computer);
        }else{
        screen.innerText = screen.innerText;
        }
    });
};

//writing numbers

for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener('click', () => {
        //zero conditions
        if((numbers[i].value==0 && computer == 0) || (funcCpt ==1 && numbers[i].value==0 )){
            computer--;
        }else if(computer<15){
        screen.innerText += numbers[i].value;
        }else if(computer>=15){
        screen.innerText = screen.innerText;
        computer--;
        }
        computer++;
        console.log(computer);
    });
};

float.addEventListener('click', () => {

if(screen.innerText =='' && computer == 0 || (clicked==true) ){
    screen.innerText += '0.';
    floatCpt++;
} else if( funcCpt == 1 ){
    screen.innerText += '.';
}
});


*/


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
            screen.innerText ='';
        }else if(computer > 0 && funcCpt == 0 ){
            console.log('is'+computer);
            operation.innerText += screen.innerText + funcBtn[i].value;
            funcCpt++;
            console.log('funcCpt=',funcCpt);
            computer = 0;
            A = screen.innerText;
            console.log(A);
            Operator = funcBtn[i].value;
            screen.innerText = '';
        }else if(computer > 0 && funcCpt == 1 ){
            operation.innerText = 'calculating' + funcBtn[i].value;
            screen.innerText = '0';
           //calculate(A,B,Operator);
        }else{
        screen.innerText = screen.innerText;
        }
    });
};

float.addEventListener('click', () => {

    if(screen.innerText =='0' && computer == 0 ){
        screen.innerText = '0.';
        floatCpt++;
    } else if( computer > 0 && floatCpt == 0 ){
        screen.innerText += '.';
        floatCpt++;
    } else if (computer > 0 && floatCpt == funcCpt){
        screen.innerText += '.';
        floatCpt++;
    }
    });
    