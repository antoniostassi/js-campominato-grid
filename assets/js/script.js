
const start = document.getElementById("start");
const container = document.querySelector(".container");

start.addEventListener("click", function() {
    
    const difficulty = document.getElementById("difficulty").value;
    container.innerHTML = "";
    
    for (let i=0; i < difficulty; i++) {
        console.log("Create "+i);
        createNewElement("div", "square", container, difficulty, i+1);
    }

});


function createNewElement(tagElement, classToAdd, appendTag, gameDifficulty, numberToDisplay){

    let newElement = document.createElement(tagElement);
    newElement.classList.add(classToAdd);
    newElement.classList.add("my-col-"+gameDifficulty);
    appendTag.append(newElement);

    newElement.addEventListener("click", function() {
        console.log("Test");
    });

    newElement.innerHTML = numberToDisplay;

}