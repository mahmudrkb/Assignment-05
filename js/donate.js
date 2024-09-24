document.getElementById('btn-add-donate')
.addEventListener('click',function(event){
    event.preventDefault();

    const totalMoney= getTextValueById('total-balance');

    const addDonate= getInputValueById('input-add-donate');
 
    const balance=getTextValueById("donate-balance");

    let showM=document.getElementById("my_modal_1");

    if(isNaN(addDonate) || addDonate<=0 || addDonate>totalMoney ){
       

        

         alert("Invalid Donation Amount");
         
       
         
         

        return  ;
        

    }
    

   

        const donateBalance= balance + addDonate;

        const myTotalBalance = totalMoney - addDonate ;
           
     
    
            document.getElementById('donate-balance').innerText= donateBalance;
    
            document.getElementById('total-balance').innerText= myTotalBalance;


            alert('Donation Successful');
            showM.showModal();

           



            
         // add to transaction history 
         const transactionTimes = new Date().toLocaleString(); 

         const p = document.createElement('p');

         p.innerText = ` ${addDonate} Taka is Donated for famine-2024 at Noakhali, Bangladesh

                        Date: ${transactionTimes}

                        `;

 


         document.getElementById("transaction-container").appendChild(p);

          
    



   
    

    

   



})