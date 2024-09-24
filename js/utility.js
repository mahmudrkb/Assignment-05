

function getInputValueById(id){

    const inputValue=document.getElementById(id).value;

    const inputNumber=parseFloat(inputValue);

    // console.log( 'output', inputValue,inputNumber)

    return inputNumber;

};


function getTextValueById(id){

    const textNum=document.getElementById(id).innerText;
    const textNumber=parseFloat(textNum);

    return textNumber;

}
