// Popup show and hide codes
let blurpage = document.getElementById("blur");
let addpopup = document.getElementById("popupbox");
let tasklist = document.getElementById("tasklist");
let popvisible = false;

function popupcomes() {
  if (!popvisible) {
    blurpage.style.filter = "blur(4px)";
    addpopup.classList.remove("hide");
    popvisible = true;
  } else {
    addpopup.classList.add("hide");
    popvisible = false;
  }
}

function closebutton() {
  blurpage.style.filter = "none";
  addpopup.classList.add("hide");
  popupbox2.classList.add("hide");
  popvisible = false;
}

// Add button functionality
let Noitem = document.getElementById("noitem");
let parent = document.getElementById("flex_container");
let Card_id = 0;

function addbutton() {
  let inputvalue = document.getElementById("input").value;
  if (inputvalue.trim() === "") {
    return; // Do not add empty tasks
  }

  Card_id++;
  let newdiv = document.createElement("div");
  let title = document.createElement("h3");
  let hrline = document.createElement("hr");
  let text = document.createElement("div");
  let newListItemText = document.createElement("h4");
  let addbutton = document.createElement("button");
  let deletebutton = document.createElement("button");

  newdiv.appendChild(title);
  newdiv.appendChild(hrline);
  newdiv.appendChild(text);
  text.appendChild(newListItemText);
  text.appendChild(deletebutton);
  text.appendChild(addbutton);

  newdiv.classList.add("flex_item");
  Noitem.style.display = "none";
  title.innerText = inputvalue;
  title.style.paddingLeft = "17%";
  title.style.color = "#000066";
  blurpage.style.filter = "blur(0px)";
  addbutton.innerText = '+';
  deletebutton.innerText = "x";
  deletebutton.classList.add("delete");
  addbutton.classList.add("enjoy");

  // Popup functionality for adding sub-tasks
  let popup2 = false;
  addbutton.addEventListener("click", function () {
    if (!popup2) {
      popupbox2.classList.remove("hide");
      popup2 = true;

      // Store a reference to the current task's div
      currentTaskDiv = newdiv;
    } else {
      popupbox2.classList.add("hide");
      popup2 = false;
    }
  });

  let button_2 = document.getElementById("button_2");
  button_2.addEventListener("click", function () {
    let input2 = document.getElementById("input-2");
    let newListItemText = document.createElement("h4");
    currentTaskDiv.appendChild(newListItemText); // Append to the current task's div

    newListItemText.classList.add("itemlists");
    newListItemText.innerText = input2.value;
    popupbox2.classList.add("hide");
    input2.value = "";
    popup2 = false;
  });

  parent.appendChild(newdiv);
  document.getElementById("input").value = ""; // Clear the input after adding the task
  addpopup.classList.add("hide");
  popvisible = false;





}

let popup2comes=false;
function closebutton2(){
 if (!popup2comes) {
   
     popupbox2.classList.remove("hide");
    popup2comes = true;
  } else {
     popupbox2.classList.add("hide");
     popup2comes= false;
  }



}
