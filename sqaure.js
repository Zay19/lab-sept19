document.addEventListener("DOMContentLoaded", function(){  
    var button = document.createElement('button')
    var text = document.createTextNode('Add Square')
    button.appendChild(text)
    button.id='btn'
    button.className= 'black'
    button.type= 'button'
    button.style.display= "block"
    document.body.appendChild(button)
    

   
    button.addEventListener('click', function(){
         var divTag= document.createElement("div");
        var divText= document.createElement('h2');
        var idNumber = 0;
        
     

        divTag.className= 'black';

        divTag.style.border= "1px solid black"
        divTag.style.borderWidth= "150%"
        
        divTag.style.padding= "10%"
        divTag.style.margin= "1%"
       
        divTag.style.backgroundColor= "yellow"
        divTag.style.cssFloat= "left"
        
        
        document.body.appendChild(divTag)

        
    
        
  divTag.addEventListener("mouseover", showID);

            function showID(){
                divTag.innerText = idNumber;
            }

            divTag.addEventListener("mouseleave", hideID);

            function hideID(){

            }
       
        
    });
//2nd addeventlistner//

divTag.addEventListener("click", function(){
var colors = ["white","red","blue","green","yellow","purple"];
    
    var divTag = document.getElementById("div");
    var background_color = divTag.style.backgroundColor;
    var i = colors.indexOf(background_color);
    if (i === colors.length-1) {
        i = -1;
    }
divTag.style.backgroundColor = colors[i+1]; 
});








    });   
    //1st addeventlistner//     
         
         
         
         
    
        
