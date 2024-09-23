// GLOBAL VARS ----------------

var buttonClicked = document.getElementById("submit");
var grandchildContainer = document.getElementById("childContainer");
    // Container for the to-list

// FUNCTIONS ------------------

function addToDo(){

    var greatGrandchildContainer = document.createElement("div");

    //USER INPUT ------------------
    var inputAdded = document.getElementById("inputTaken").value;
    var inputPushed = document.createElement("p");

    inputPushed.innerText = inputAdded;
    inputPushed.classList.add("toDo");
        //Added accessories for the input that the user put in

    console.log(inputAdded);

    //Buttons
    var finishedBtn = document.createElement("button");
    finishedBtn.innerText = "Finished."
        // Label for button

    var removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove."
        // Label for button

    //Adding To-Do ----------------

    if (inputAdded===""){
        console.log("Nothing.");
        alert("Please write something.");
            //Alert to make sure the user puts something in
    }
    else{

        //Appending items into the container
        grandchildContainer.appendChild(greatGrandchildContainer);
        greatGrandchildContainer.appendChild(inputPushed);
        greatGrandchildContainer.appendChild(finishedBtn);
        greatGrandchildContainer.appendChild(removeBtn);


        //EVENTS ------------------
        finishedBtn.addEventListener("click", finishEffect);
        removeBtn.addEventListener("click", removeEffect);

    }

}

function finishEffect(event){

    // Crossing out the listed item
    var finishTask = event.target.parentElement;
    finishTask.classList.toggle("doneWith");
}

function removeEffect(event){

    // Gets rud if the to-do item
    var removeTask = event.target.parentElement;
    grandchildContainer.removeChild(removeTask);
}

// EVENT ----------------------

buttonClicked.addEventListener("click", addToDo);
