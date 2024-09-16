//* API = Application Programming Interface
//? What it means: Its the middle man between The front end (website) and the DATABASE


//* JSON = Javascript Object Notation
//* JSON is set up the same way as an object
let person = {
    firstName: "Chris",
    lastName: "Jenkins",
}

//! Fetching

let url = `https://swapi.dev/api/people/1`

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    });

//! Fetching Manipulation
//* I want to use this data in more functions so I made a gobal EMPTY variable
let currentCharacter = "";
let showButton = document.querySelector(".characterName button");
let counter = 1;

async function fetchData(currentCount){
    //* this data may CHANGE so I made this variable inside of this function.
    let url = `https://swapi.dev/api/people/${currentCount}`

    await fetch(url)
        .then(response => response.json())
        .then(data => {
            currentCharacter = data;
            console.log(currentCharacter)

            //? What if I only need certain info from the API
            //* You can just call data.KEY for just that info
            pasteTraits(data.height, data.mass);
        })
        .catch(error => {
            console.log(error)
        })
}


async function pasteDataToPage(){
    //? USE THIS TO KEEP REPEAT CLICKING BUTTON
    //* Running this first so I have the "currentCharacter" data
    showButton.disabled = 'true'
    await fetchData(counter)

    counter++ 

    
    let paragraph = document.createElement("p");
    console.log(currentCharacter.name)
    paragraph.innerText = currentCharacter.name;

    let characterDivBox = document.querySelector(".characterName");
    console.log(characterDivBox);

    characterDivBox.append(paragraph);

    //? Let the button be clicked again
    showButton.removeAttribute('disabled')
}

let lukesHeight;
function pasteTraits(currentHeight, currentWeight){
    console.log(currentHeight, currentWeight);
    lukesHeight = currentHeight;
    console.log(lukesHeight)
}

showButton.addEventListener("click", pasteDataToPage)

