document.getElementById('btn-add-donate2')
.addEventListener('click',function(event){
    event.preventDefault();

    const totalMoney= getTextValueById('total-balance');

    const addDonate= getInputValueById('input-add-donate2');
 
    const balance=getTextValueById("donate-balance2");

    if(isNaN(addDonate) || addDonate<=0 || addDonate>totalMoney ){
        alert("Invalid Donation Amount");

        return;

    }
    else{

        const donateBalance= balance + addDonate;

        const myTotalBalance = totalMoney - addDonate ;
           
     
    
            document.getElementById('donate-balance2').innerText= donateBalance;
    
            document.getElementById('total-balance').innerText= myTotalBalance;


            // alert('Donation Successful')



            
         // add to transaction history 
         const transactionTimes = new Date().toLocaleString(); 

         const p = document.createElement('p');

         p.innerText = ` ${addDonate} Taka is Donated for famine-2024 at Feni, Bangladesh.

                        Date: ${transactionTimes}
                        
                        `;

 


         document.getElementById("transaction-container").appendChild(p);
    



    }
    

    

   



})