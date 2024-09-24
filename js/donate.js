document.getElementById('btn-add-donate')
.addEventListener('click',function(event){
    event.preventDefault();



    console.log('work')

    const totalMoney= getTextValueById('total-balance');

    const addDonate= getInputValueById('input-add-donate');
 
    const balance=getTextValueById("donate-balance");

    const donateBalance= balance + addDonate;

    const myTotalBalance = totalMoney - addDonate ;
       
 

        document.getElementById('donate-balance').innerText= donateBalance;

        document.getElementById('total-balance').innerText= myTotalBalance;


    //      // add to transaction history 

    //      const p = document.createElement('p');

    //      p.innerText = `Add: ${addMoney} tk. balance ${newBalance}`;

 


    //    document.getElementById("transaction-container").appendChild(p);
    



})