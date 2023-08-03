
  // Popup show and hide codes
  let blurpage = document.getElementById("blur");
  let addpopup = document.getElementById("popupbox");
  let popupbox2 = document.getElementById("popupbox2");

  var backbutton = document.getElementById("back_button");
  backbutton.classList.add("hide");

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
  const parent = document.getElementById("flex_container");
  let Card_id = 0;
  let centeredDiv = null; // Store a reference to the centered div

  



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
    let donebutton=document.createElement("button")
    
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
    title.style.color = "#000066";
    blurpage.style.filter = "blur(0px)";
    addbutton.innerText = "+";
    deletebutton.innerText = "x";
    deletebutton.classList.add("delete");
    addbutton.classList.add("enjoy");
    

    newListItemText.originalText = inputvalue; 
    newListItemText.done = false; 

    const input = document.getElementById("input");
    const hide_container = document.getElementById("hide_container");

    title.addEventListener("click", function () {
      if (centeredDiv !== newdiv) {
        // If it's not already centered, center it and hide others
        centeredDiv = newdiv;
        hideOtherDivs(newdiv);
      } else {
        // If it's already centered, revert back
        showAllDivs();
        centeredDiv = null;
      }
    });





  // ... (previous code)

  
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
       let donebutton=document.createElement("button")
      let newListItemText = document.createElement("h4");
     
      donebutton.innerText="done"
      donebutton.classList.add("done")
      donebutton.style.marginLeft="36%"
      donebutton.style.marginTop="0%"
      donebutton.addEventListener("click",function(){
        newListItemText. classList.add("linethrough")
        donebutton.classList.add("hide")
      })





      newListItemText.style.paddingLeft = "35%";
      newListItemText.style.marginTop = "4%";
      currentTaskDiv.appendChild(newListItemText); 
      currentTaskDiv.appendChild(donebutton)// Append to the current task's div

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

    deletebutton.addEventListener("click", function () {
      newdiv.style.display = "none";
    });
  }

  









function showAllDivs() {

  const allDivs = Array.from(document.getElementsByClassName("flex_item"));
  allDivs.forEach((div) => {
    div.style.display = "block";
    div.classList.remove("hide_container");
  });
  tasks.classList.remove("hide");
  backbutton.classList.add("hide");
  centeredDiv = null;

  // Show the newly added task
  const newTaskDiv = document.querySelector(".flex_item:last-child");
  if (newTaskDiv) {
    hideOtherDivs(newTaskDiv);
  }
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

  // Function to hide all divs except the clicked
 
  const tasks = document.getElementById("tasklist");
  


  function hideOtherDivs(clickedDiv) {
     const inputtitle = document.getElementById("input");
    const allDivs = Array.from(document.getElementsByClassName("flex_item"));
    allDivs.forEach((div) => {
      if (div !== clickedDiv) {
        tasks.innerText=inputtitle.value;
        div.style.display = "none";
      } else {
        if (div.classList.contains("hide_container")) {
          // If the div is already centered, revert back to its original position
          div.style.display = "block";
          div.classList.remove("hide_container");
          centeredDiv = null;
          
        } else {
          // If it's not already centered, center it and hide others
          div.style.display = "block";
          div.classList.add("hide_container");
          centeredDiv = div;

        }
      }
    });

 tasks.classList.add("hide");
    backbutton.classList.remove("hide");
  }

  // Function to show all divs (used by the back button)
  function showAllDivs() {
    const allDivs = Array.from(document.getElementsByClassName("flex_item"));
    allDivs.forEach((div) => {
      div.style.display = "block";
      div.classList.remove("hide_container");
    });
    tasks.classList.remove("hide");
    backbutton.classList.add("hide");
    centeredDiv = null;
  }

  function reverse() {
    showAllDivs();
  }

