// let input = document.querySelector("#outputBox");
// let buttons = document.querySelectorAll("button");

// let string = "";
// let arr = Array.from(buttons)

// arr.forEach(button =>{
//     button.addEventListener('click', (e)=>{
//         if(e.target.innerHTML === "="){
//             string = eval(string);
//             input.value = string;
//         }

//         else if(e.target.innerHTML === "AC"){
//             string = DOMStringList.substring(0, string.length-1);
            
//         }

//         else{
//             string+= e.target.innerHTML;
//             input.value = string;
//         }
//     })
// })
let input = document.querySelector("#outputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value === "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }

        else if (value === "AC") {
            string = "";
            input.value = string;
        }

        else if (value === "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

         else if (value === "%") {
            string += "%";  
            input.value = string;
    }
        else {
            string += value;
            input.value = string;
        }
    });
});
