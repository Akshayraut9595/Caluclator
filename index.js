let input = document.getElementById('inputbox');   // accessing input box
let buttons = document.querySelectorAll('button');   // accessing all buttons

let string = "";

let arr = Array.from(buttons);  // making array of buttons

arr.forEach(button => {
    button.addEventListener('click',(e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);   // eval is inbuit function used to evaluate everything in string
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
