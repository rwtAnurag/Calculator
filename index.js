var input = document.querySelector("#input");

var inputValue1 = ""

function clear(){
    input.value = inputValue1 ="";
   
}  

function clickhandler(clickedEvent ){
    
    const clickedCell = clickedEvent.target.innerHTML;

    if(clickedCell === "ans"){
       inputValue1 =  eval(inputValue1);
       input.value = inputValue1;
        return;
    }
   inputValue1 += clickedCell;
    if(clickedCell === "clear"){
        clear();
        return;
    }
   input.value = `${inputValue1}`;
  
}

document.querySelectorAll(".number")
.forEach((number)=>number.addEventListener("click",clickhandler));