// GLOBAL VARS ----------------

var buttonClicked = document.getElementById("submit");

// FUNCTIONS ------------------

function addToDo(){

    var grandchildContainer = document.getElementById("childContainer");

    //USER INPUT ------------------
    var inputAdded = document.getElementById("inputTaken").value;
    var textInside = document.createElement("p");
    textInside.innerText = inputAdded;
    textInside.classList.add("toDo");

    console.log(textInside);

    //Buttons
    var finishedBtn = document.createElement("button");
    finishedBtn.innerText = "Finished."
    finishedBtn.classList.add("doneBtn");

    var removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove."
    removeBtn.classList.add("goneBtn");

    //Adding To-Do ----------------

    if (inputAdded===""){
        console.log("Nothing.");
    }
    else{
        grandchildContainer.appendChild(textInside);
        grandchildContainer.appendChild(finishedBtn);
        grandchildContainer.appendChild(removeBtn);
    }

}

function finishEffect(){
    if(finishEffect.target.tagName === toDo){
        finishEffect.target.classList("checked");
    }
    else{
        console.log("Nothing.")
    }
}

// EVENT ----------------------

buttonClicked.addEventListener("click", addToDo);

finishedBtn.addEventListener("click", finishEffect);