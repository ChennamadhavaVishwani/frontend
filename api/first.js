const URL = "https://dogapi.dog/api/v2/facts";
dogFacts =  document.querySelector(".facts");
btnClass = document.querySelector(".btn");

const getFacts = async () =>{
    console.log("Getting data.....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    console.log(data.data[0].attributes);
    dogFacts.innerText = data.data[0].attributes.body;
};

btnClass.addEventListener("click", getFacts);