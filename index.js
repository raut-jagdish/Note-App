const notesContainer = document.querySelector(".container");
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

createbtn.addEventListener("click", ()=>{
    let inputBox=document.createElement("p");
    let img = document.createElement('img');
    inputbox.className="input-box"
    inputBox.setAttribute("contenteditable", "true");
    img.src="notes-app-img/images/delete.png";
    notescontainer.appendChild(inputBox).appendChild(img);
})
