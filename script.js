
// popup show and hide codes
let blurpage=document.getElementById("blur")
let addpopup=document.getElementById("popupbox")
let popvisible=false;

function popupcomes(){
	

	if(popvisible){
		blurpage.style.filter="blur(4px)"
	addpopup.classList.remove("hide")
    popvisible=false
Noitem.style.display="none"}

else{addpopup.classList.add("hide")
    popvisible=true

     }
}


// add button functionality is here
let Noitem=document.getElementById("noitem") 
let parent=document.getElementById("main_container")
let parent1=document.getElementById("flex_container")
let inputvalue=document.getElementById("input")
input2=document.getElementById("input-2")

let Card_id=0


let popupbox2=document.getElementById("popupbox2")












function addbutton(){

	Card_id++
let newdiv=document.createElement("div")
let title=document.createElement("h3")
let hrline=document.createElement("hr")
 let text=document.createElement("div")

  let addbutton=document.createElement("button")
 let deletebutton=document.createElement("button")


if(popvisible){
		blurpage.style.filter="blur(4px)"
	addpopup.classList.remove("hide")
    popvisible=false}

else{addpopup.classList.add("hide")
    popvisible=true

     }



// parent.appendChild(parent1)
parent1.appendChild(newdiv)
newdiv.appendChild(title)
newdiv.appendChild(hrline)
newdiv.setAttribute("id",Card_id)
newdiv.appendChild(text)
text.appendChild(deletebutton)
text.appendChild(addbutton)


newdiv.classList.add("flex_item")
Noitem.style.display="none"
title.innerText=inputvalue.value;
title.style.paddingLeft="12%"
title.style.color="red"
	blurpage.style.filter="blur(0px)"
	addbutton.innerText='+'
	deletebutton.innerText="x"
	deletebutton.classList.add("delete")

	addbutton.classList.add("enjoy")
	

let popup2=false
addbutton.addEventListener("click",function(){
	
	if(popup2){
		
	popupbox2.classList.remove("hide")
    popup2=false
Noitem.style.display="none"}

else{popupbox2.classList.add("hide")
    popup2=true

     }

let para++
let button_2 = document.getElementById("button_2");
  button_2.addEventListener("click", function () {
    let newListItem = document.createElement("div");
    let newListItemText = document.createElement("h4");
    newListItem.appendChild(newListItemText);
    newListItemText.setAttribute("id",para)
    newListItemText.innerText = input2.value.trim();
    newdiv.appendChild(newListItem);
    popupbox2.classList.add("hide");
    popup2 = true;
  });
































})














	deletebutton.addEventListener('click',function(){
		newdiv.remove()

	})

newdiv.addEventListener("click",function(){
	

})


}



// close button functionality is there

