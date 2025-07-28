 

 const input = document.getElementById("text-input");
 const numberButtons = document.querySelectorAll(".number-btn"); //Creates a node list (or array) of every button that has this class name
 const operator_buttons = document.querySelectorAll(".operator-btn");
 const backspace_btn = document.querySelectorAll("#backspace-btn");


 

//Numerical buttons to the display
numberButtons.forEach(button => {
    button.addEventListener("click", () =>{
        input.value+= button.textContent;

       
    })
});


//Operator buttons to the display
operator_buttons.forEach(button => {
    button.addEventListener("click", () =>{
        
        if(input.value.includes("=")){
            
            input.value = input.value.replace("=", '');
            
        }else{
           input.value+= button.textContent; 
        }

        
    })
});



   console.log(operator_buttons)

//Previous Method to calculate but I ran out of time.
// I was going to method chain and then turn infix expressions 
//into postfix for better operator precedence.
 /*  class My_Calculator{

    constructor(){
       this.value = 0; 
    }



   add(number){
    this.value += number;
    return this;
   }

   subtract(number){
    this.value -= number;
    return this;
   }

   multiply(number){
    this.value = this.value * number;
    return this;
   }

   divide(number){
    this.value = this.value / number;
    return this;
   }


   reset_value(){
    this.value = 0;
    return this;
   }

    value_result(){
    return this.value;
   }


   
   



   }*/

//const calc = new My_Calculator();

 


operator_buttons[5].addEventListener("click", () =>{

    if(input.value.includes("=")){
            
            input.value = input.value.replace("=", '');
            
    }

    try{ // Error catch for values like 3-= and then the user hits equal
        input.value = eval(input.value);
        
    } catch(error){
        input.value = "ERROR" 
    }
       

}
 );


//Backspace Functionality
backspace_btn.forEach(backspace =>{
    backspace.addEventListener("click", () =>{
        let input_val = input.value.split("");
        input_val.pop(); // Takes out the last element in the array, resembling a "backspace"
        console.log(input_val);
        let input_val_array = input_val.join();
        let regex = new RegExp(',', 'g');
        let result = input_val_array.replaceAll(regex ,''); // Needs to be in a variable because this creates a new string.
        console.log(result, typeof result, result.length);
        input.value = result;
        console.log(result);
        
    })
})
//Clears screen display
function clear_display(){
    input.value = "";
}

