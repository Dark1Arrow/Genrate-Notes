const notes = document.querySelector(".notes");

function showNotes(){
    notes.innerHTML = localStorage.getItem("notes");
}

function updateStorage(){
    localStorage.setItem("notes",notes.innerHTML);
}

function genrateNotes() {
    const list = document.createElement("p");
    const img = document.createElement("img");
    img.classList.add("delete");
    img.setAttribute("src", "delete.svg")
    list.setAttribute("contenteditable", "true");
    notes.appendChild(list).appendChild(img);
}

notes.addEventListener("click", (e) => {
    if (e.target.tagName == "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName === "P"){
        console.log("hty")
        notesData = document.querySelectorAll(".notes");
        notesData.forEach(element => {
            element.onkeyup = function(){
                updateStorage();
            }
        });
    }
})

showNotes();