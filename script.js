let computer = 0;
let funcCpt = 0;
let floatCpt = 0;
let clicked = false;
//Variables
let operations = document.getElementById("operation");
let screen = document.getElementById("screen");
let buttons = document.querySelectorAll('input');
let numbers = document.getElementsByClassName('number');
let funcBtn = document.getElementsByClassName('function-button');
let screenNum = document.getElementById("screen").innerText;
let equal = document.getElementById('equal');
let float = document.getElementById('point');
//writing function
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
            funcCpt ++;
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
/*

float.addEventListener('click', () => {
let i = screen.innerText.slice(-1);
if((screen.innerText =' ' && computer == 0 ) || (T.includes(i) == true)){
    screen.innerText += '0.';
    floatCpt++;
}
else if( T.includes(i) == false && clicked == true && floatCpt<2 ){
    screen.innerText += '.';
}
});
*/