let blurpage = document.getElementById("blur");
let addpopup = document.getElementById("popupbox");
let popupbox2 = document.getElementById("popupbox2");
let backbutton = document.getElementById("back_button");
let Noitem = document.getElementById("noitem");
const parent = document.getElementById("flex_container");
const hide_container = document.getElementById("hide_container");
let Card_id = 0;
let centeredDiv = null;
let currentTaskDiv = null;
backbutton.classList.add("hide")

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

let popup2comes = false;
function closebutton2() {
  if (!popup2comes) {
    popupbox2.classList.remove("hide");
    popup2comes = true;
  } else {
    popupbox2.classList.add("hide");
    popup2comes = false;
  }
}

function handleAddButtonClick() {
  let input2 = document.getElementById("input-2");
  let donebutton = document.createElement("button");
  let newListItemText = document.createElement("h4");

  donebutton.innerText = "done";
  donebutton.classList.add("done");
  donebutton.style.marginLeft = "36%";
  donebutton.style.marginTop = "0%";
  donebutton.addEventListener("click", function () {
    newListItemText.classList.add("linethrough");
    donebutton.classList.add("hide");
  });

  newListItemText.style.paddingLeft = "35%";
  newListItemText.style.marginTop = "4%";
  currentTaskDiv.appendChild(newListItemText);
  currentTaskDiv.appendChild(donebutton);

  newListItemText.classList.add("itemlists");
  newListItemText.innerText = input2.value;
  popupbox2.classList.add("hide");
  input2.value = "";
  popup2comes = false;
}

function addbutton() {
  let inputvalue = document.getElementById("input").value;
  if (inputvalue.trim() === "") {
    return;
  }

  Card_id++;
  let newdiv = document.createElement("div");
  let title = document.createElement("h3");
  let hrline = document.createElement("hr");
  let text = document.createElement("div");
  let newListItemText = document.createElement("h4");
  let donebutton = document.createElement("button");

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
  title.style.paddingLeft = "18%";
  title.style.color = "white";
  blurpage.style.filter = "blur(0px)";
  addbutton.innerText = "+";
  deletebutton.innerText = "x";
  deletebutton.classList.add("delete");
  addbutton.classList.add("enjoy");

  newListItemText.originalText = inputvalue;
  newListItemText.done = false;

  const input = document.getElementById("input");

  title.addEventListener("click", function () {
    if (centeredDiv !== newdiv) {
      centeredDiv = newdiv;
      hideOtherDivs(newdiv);
    } else {
      showAllDivs();
      centeredDiv = null;
    }
  });

  let popup2 = false;
  addbutton.addEventListener("click", function () {
    if (!popup2) {
      popupbox2.classList.remove("hide");
      popup2 = true;
      currentTaskDiv = newdiv;

      button_2.removeEventListener("click", handleAddButtonClick);
      button_2.addEventListener("click", handleAddButtonClick);
    } else {
      popupbox2.classList.add("hide");
      popup2 = false;
    }
  });

  if (centeredDiv) {
    hide_container.appendChild(newdiv);
  } else {
    parent.appendChild(newdiv);
  }

  document.getElementById("input").value = "";
  addpopup.classList.add("hide");
  popvisible = false;

  deletebutton.addEventListener("click", function () {
    if (centeredDiv === newdiv) {
      centeredDiv = null;
      hideOtherDivs(null);
    }
    parent.removeChild(newdiv);
  });
}

const tasks = document.getElementById("tasklist");

function hideOtherDivs(clickedDiv) {
  const allDivs = Array.from(document.getElementsByClassName("flex_item"));
  allDivs.forEach((div) => {
    if (div !== clickedDiv) {
      div.style.display = "none";
    } else {
      if (div.classList.contains("hide_container")) {
        div.style.display = "block";
        div.classList.remove("hide_container");
        centeredDiv = null;
      } 

      else {
        div.style.display = "block";
        div.classList.add("hide_container");
        centeredDiv = div;
      }
    }
  });

  const hiddenCards = allDivs.filter((div) => div.style.display === "none");
  if (hiddenCards.length > 0) {
    tasks.classList.add("hide");
    backbutton.classList.remove("hide");
  } else {
    tasks.classList.add("hide");
    backbutton.classList.remove("hide");
  }
}

function showAllDivs() {
  const allDivs = Array.from(document.getElementsByClassName("flex_item"));
  allDivs.forEach((div) => {
    div.style.display = "block";
    div.classList.remove("hide_container");
  });
  tasks.classList.remove("hide");
  backbutton.classList.add("hide");
}

function reverse() {

  showAllDivs();
  const hiddenContainers = Array.from(document.getElementsByClassName("hide_container"));
  hiddenContainers.forEach((container) => {
    container.style.display = "block";
    container.style.flexDirection = "column";
  });

  if (currentTaskDiv) {
    centeredDiv = currentTaskDiv;
  } else {
    centeredDiv = null;
  }

  // Get all the cards in the hide_container
  const hiddenCards = Array.from(document.getElementsByClassName("hide_container")[0].children);

  // Append the hidden cards to the flex_container
  hiddenCards.forEach((card) => {
    parent.appendChild(card);
  });
}
