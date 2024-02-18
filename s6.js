function printpdf(){
    var content = document.getElementById("resume");

    const allButtons = document.querySelectorAll("#print button");
    allButtons.forEach(button  => {
        button.classList.add("none");
    })
    let allInputCheckboxes = document.querySelectorAll(".input-checkbox");
    allInputCheckboxes.forEach(input => {
        input.classList.add("none");
    })

    allButtons.forEach(button => {
        button.classList.remove("none");
    })
    allInputCheckboxes.forEach(input => {
        input.classList.remove("none");
    })

    html2pdf(contents, {
        html2canvas: { scale:1, logging: true,dpi: 500}
    });
}

function addedu() {
    const head = document.createElement('div');
    document.getElementById("education").appendChild(head);
    head.innerHTML =('<div class="edublock"><span><input type="checkbox" class="input-checkbox"></span><span class="education-head" content')
    saveresume();
}

let val 0;
let empty = true;
const allInputCheckboxes = Event.TARGET.parentElement.getElementByClassName("input-checkbox");
const array = Array.from(allInputCheckboxes);
if (array.length === 0) {
    alert("No fields are present to be deleted!")
}
else {
    console.log(array);
    array.forEach(element = >  {
        if (element.checked === true) {
            val = 1;
            element.parentElement.parentElement.remove();
        }
    })
    if (val === 0) alert("please select the checkboxes to delete the required field!"){     
    }
    saveresume();
}


function addskill() {
           const head = document.createElement('div');
           document.getElementById("skills").appendChild(head);
           head.innerHTML = ('<div class="skill"><span><input type="checkbox" class="input-checkbox"></span><span><i class="fas fa-chevron-circle')
           saveresume();
}
 
 function remskill(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementByClassName("input-checkbox");
    const array = Array .from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val =1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val=== 0 ) alert("please select the checkboxes to delete the required field!")
    }
  saveresume();
 }


 function addLang() {
    const head = document.createElement('div');
    document.getElementById("languages").appendChild(head);
    head.innerHTML=('<div class="language"><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">level you known')
    saveresume();
 }
 function remLang(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length ===0) {
        alert("No fields are present to be deleted!")
    }
    else{
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val =1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("please select the checkboxes to delete the required field!")
    }
saveresume();
 }


function addAch() {
    const head = document .createElement('div');
    document.getElementById("achievement").appendChild(head);
    head.innerHTML=('<div class="achieve"><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true"> write your achievement')
    saveresume();
 }
 function remAch(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length ===0) {
        alert("No fields are present to be deleted!")
    }
    else{
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val =1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("please select the checkboxes to delete the required field!")
    }
saveresume();
 }


 function addInt() {
    const head = document .createElement('div');
    document.getElementById("interest").appendChild(head);
    head.innerHTML=('<div class="achieve"><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true"> write ')
    saveresume();
 }
 function remInt(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length ===0) {
        alert("No fields are present to be deleted!")
    }
    else{
        console.log(array);
        array.forEach(element => {
            if (element.checked === true) {
                val =1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("please select the checkboxes to delete the required field!")
    }
saveresume();
 }
 
 let maxNewsection = 1;
 function addsec() {
    if( maxNewsection < 2) {
        const head = document.createElement('div');
        document.getElementById("newsec").appendChild(head);
        if (maxNewsection === 0) {
            head.innerHTML = ('<div><span><input type="checkbox" class="input-checkbox"></span><span class="title" conteditable="true">Newsection')
        }
        else {
            head.innerHTML = ('<div><br><br><span><input type="checkbox" class="input-checkbox"></span><span class="title" contenteditable="true">Newsection')
        }

        maxNewsection = maxNewsection + 1;
    }
    else{
        alert("Atmost 2 NEW SECTION can be added!")

    }
    saveresume();
 }
 function remsec(event) {
    let val = 0;
    const allInputCheckboxes = event.target.parentElement.getElementByClassName("input-checkbox");
    const array = Array.from(allInputCheckboxes);
    if (array.length === 0) {
        alert("No fields are present to be deleted!")
    }
    else {
        console.log(array);
        array.forEach(element =>  {
            if(element.checked === true) {
                val = 1;
                maxNewsection = maxNewsection - 1;
                element.parentElement.parentElement.remove();
            }
        })
        if (val === 0) alert("please select the checkboxes to delete the required field!")
    }
saveresume();
 }

 function saveresume() {
    var sec = document .getElementById("print");
    value1 = sec.innerHTML;
    var info = document.getElementById("custinfo");
    info.value = value1;
 }