// console.log("Hey There!!!");
// // let a = prompt("Enter a number");

// // if(a%5 == 0){
// //     console.log("The number is a multiple of 5");
// // }
// // else{
// //     console.log("The number is not a multiple of 5");
// // }

// for(let i = 1; i<100001; i++){
//     console.log("Vishu");
// }

// console.log("Loop has ended")

// console.dir(document.body.childNodes[1]);
// let heading = document.getElementsByClassName("headers")
// console.dir("heading")
// console.log(heading)

// let firstElement = document.querySelector("p");
// console.dir(firstElement)

// let allElem = document.querySelectorAll("p")
// console.dir(allElem)


let btn1 = document.querySelector("#btn1");

btn1.onclick = (e) => {
    console.log(e);
    console.log(e.type)
    console.log(e.target)
    
};

let btn2 = document.querySelector("#btn2");

btn2.ondblclick = () =>{
    console.log('button was clicked twice')};

let div = document.querySelector(".div");

div.onmouseover = () =>{
    console.log("you are inside the div")
};