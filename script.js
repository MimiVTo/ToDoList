// GLOBAL VARS ----------------

var buttonClicked = document.getElementById("submit");
var grandchildContainer = document.getElementById("childContainer");

// FUNCTIONS ------------------

function addToDo(){

    var greatGrandchildContainer = document.createElement("div");

    //USER INPUT ------------------
    var inputAdded = document.getElementById("inputTaken").value;
    var inputPushed = document.createElement("p");
    inputPushed.innerText = inputAdded;
    inputPushed.classList.add("toDo");

    console.log(inputAdded);

    //Buttons
    var finishedBtn = document.createElement("button");
    finishedBtn.innerText = "Finished."

    var removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove."

    //Adding To-Do ----------------

    if (inputAdded===""){
        console.log("Nothing.");
        alert("Please write something.");
    }
    else{
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
    var finishTask = event.target.parentElement;
    finishTask.classList.toggle("doneWith");
}

function removeEffect(event){
    var removeTask = event.target.parentElement;
    grandchildContainer.removeChild(removeTask);
}

// EVENT ----------------------

buttonClicked.addEventListener("click", addToDo);
