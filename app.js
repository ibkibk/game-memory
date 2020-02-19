
const onload = () => {
   
          
 
    $('.front').css("visibility","hidden");
    $(".memory").click((event)=>{
        $(event.target).children().first().css("visibility","visible");
        

    })
  


}
$(onload);
