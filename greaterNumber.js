function greaterNumber(input){
    let firstNumber = Number(input[0]);
    let secontNumber = Number(input[1]);
    if(firstNumber > secontNumber){
        console.log(firstNumber);
    } else {
        console.log(secontNumber);
    }
}

greaterNumber(["-5", "5"]);