var score = document.getElementById("score");
var mark = document.getElementById("mark");
var result = document.getElementById("notification");
var firstNumber = document.getElementById("firstNumber");
var secondNumber = document.getElementById("secondNumber");

function firstCheck(){
    if(isNaN(parseInt(firstNumber.value))){
    result.textContent = "Only numbers !!";
    this.value = "";
    }else{
    result.textContent = "";
    }
    }

    function secondCheck(){
    if(isNaN(parseInt(secondNumber.value))){
    result.textContent = "Only numbers !!";
    this.value = "";
    }else{
    result.textContent = "";
    }
    }

function addition(){
    let first = parseInt(firstNumber.value);
    let second = parseInt(secondNumber.value);
    if(!isNaN(first) && !isNaN(second)){
    score.textContent = first + second;
    mark.textContent = "+";
    } else {
    result.textContent = "Please put some numbers in the given fields!";}
    }

    function subtraction(){
    let first = parseInt(firstNumber.value);
    let second = parseInt(secondNumber.value);
    if(!isNaN(first) && !isNaN(second)){
    score.textContent = first - second;
    mark.textContent = "-";
    } else {
    result.textContent = "Please put some numbers in the given fields!";
    }
    }

    function multiplication(){
        let first = parseInt(firstNumber.value);
        let second = parseInt(secondNumber.value);
        if(!isNaN(first) && !isNaN(second)){
        score.textContent = first * second;
        mark.textContent = "*";
        } else {
        result.textContent = "Please put some numbers in the given fields!";
        }
        }

       function division(){
        let first = parseInt(firstNumber.value);
        let second = parseInt(secondNumber.value);
        if(!isNaN(first) && !isNaN(second)){
        score.textContent = first / second;
        mark.textContent = "/";
        } else {
        result.textContent = "Please put some numbers in the given fields!";
        }
        if(!isNaN(first) && (second != 0)){
        score.textContent = first / second;
        mark.textContent = "/";
        }else{
              result.textContent = "You can not divide by zero";
        }
    }


    function exponentiation(){
        let first = parseInt(firstNumber.value);
        let second = parseInt(secondNumber.value);
        if(!isNaN(first) && !isNaN(second)){
        let result = first;
        if(second === 0){
        result = 1;
        }else{
        for(let i = 1; i < second;i++){
        result = result * first;
        }
        score.textContent = result;
        mark.textContent = "^";
        } 
    }else {
        result.textContent = "Please put some numbers in the given fields!";
        }
        }

        window.firstCheck = firstCheck
        window.addition = addition
        window.subtraction = subtraction
        window.exponentiation = exponentiation
        window.secondCheck = secondCheck 
                