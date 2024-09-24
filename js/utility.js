

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

};



function showSectionById(id){

    document.getElementById("main-section").classList.add('hidden');
    document.getElementById("transaction-section").classList.add('hidden');

    // show id 

    document.getElementById(id).classList.remove('hidden');

   

};


function showBgSectionById(id){

    document.getElementById('btn-donation').classList.remove('bg-lime-300');
    document.getElementById('btn-history').classList.remove('bg-lime-300');

    document.getElementById(id).classList.add('bg-lime-300');

};

