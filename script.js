const inpt1 = document.getElementById("input1");
const inpt2 = document.getElementById("input2");
const inpt3 = document.getElementById("input3");
const inpt4 = document.getElementById("input4");
const inpt5 = document.getElementById("input5");
const inpt6 = document.getElementById("input6");
const inpt7 = document.getElementById("input7");
const inpt8 = document.getElementById("input8");
const inpt9 = document.getElementById("input9");
const inptPl = document.getElementById("input+");
const inptMin = document.getElementById("input-");
const inptF = document.getElementById("input/");
const inptM = document.getElementById("input*");
const inptR = document.getElementById("input2");
const inptS = document.getElementById("inputscrt");
const inptC = document.getElementById("inputC");
let screen = document.getElementById("calc-screen");

let input1Array = [];
let input2Array = [];
let mathOperation;
let isClicked = false;


function key1(){
    screen.innerHTML += 1;
    input1Array.push(1);
}
function key2(){
    screen.innerHTML += 2;
    input1Array.push(2);
}
function key3(){
    screen.innerHTML += 3;
    input1Array.push(3);
}
function key4(){
    screen.innerHTML += 4;
    input1Array.push(4);
}
function key5(){
    screen.innerHTML += 5;
    input1Array.push(5);
}
function key6(){
    screen.innerHTML += 6;
    input1Array.push(6);
}
function key7(){
    screen.innerHTML += 7;
    input1Array.push(7);
}
function key8(){
    screen.innerHTML += 8;
    input1Array.push(8);
}
function key9(){
    screen.innerHTML += 9;
    input1Array.push(9);
}
function key0(){
    screen.innerHTML += 0;
    input1Array.push(0);
}

function input1(){
    let  x = input1Array.join("");
    let  y = input2Array.join("");
    mathOperation = `${x}+${y}`;
}
function input2(){
    let  x = input1Array.join("");
    let  y = input2Array.join("");
    mathOperation = `${x}-${y}`;
}
function input3(){
    let  x = input1Array.join("");
    let  y = input2Array.join("");
    mathOperation = `${x}/${y}`;
}
function input4(){
    let  x = input1Array.join("");
    let  y = input2Array.join("");
    mathOperation = `${x}*${y}`;
}
function input5(){
    let  x = input1Array.join("");
    let  y = input2Array.join("");
    mathOperation = `${x}%${y}`;
}
