document.getElementById('btn-add-donate3')
.addEventListener('click',function(event){
    event.preventDefault();

    const totalMoney= getTextValueById('total-balance');

    const addDonate= getInputValueById('input-add-donate3');
 
    const balance=getTextValueById("donate-balance3");

    if(isNaN(addDonate) || addDonate<=0 || addDonate>totalMoney ){
        alert("Invalid Donation Amount");

        return;

    }
    else{

        const donateBalance= balance + addDonate;

        const myTotalBalance = totalMoney - addDonate ;
           
     
    
            document.getElementById('donate-balance3').innerText= donateBalance;
    
            document.getElementById('total-balance').innerText= myTotalBalance;


            alert('Donation Successful')



            
         // add to transaction history 
         const transactionTimes = new Date().toLocaleString(); 

         const p = document.createElement('p');

         p.innerText = `Donate ${addDonate} tk. My Balance ${myTotalBalance} tk.

                        Date: ${transactionTimes}
                        
                        `;

 


         document.getElementById("transaction-container").appendChild(p);
    



    }
    

    

   



})