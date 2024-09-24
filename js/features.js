document.getElementById("btn-blog")
    .addEventListener('click',function(){
    

    console.log('button click');


     window.location.href ="./blog.html"
   

   

});


document.getElementById("btn-donation")
.addEventListener('click',function(){
   

   

    showSectionById("main-section");

    showBgSectionById("btn-donation")

    


});

document.getElementById("btn-history")
.addEventListener('click',function(){


    showSectionById("transaction-section");

    showBgSectionById("btn-history");


});










