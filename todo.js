let btn = document.getElementById("btnSubmit");
let textArea = document.getElementById("typeText");
let display = document.getElementById("todoDisplay");
let deleteBtn = document.getElementById("deleteBtn");


let index = 1;
let j=1
let randomBtn;
// localStorage.clear()
const addItem=()=>{
    console.log("this is working")
    display.innerHTML += `<div id="msg" class="msg-${j}"><li>
    
    ${localStorage.getItem(`${textArea.value}`)}
    <button class="random" id="randomBtn"><img src="remove.png" class="img"></button>
    </li>
    </div>
    `    
    let randomBtn2 = document.getElementById("randomBtn");
    randomBtn = randomBtn2;
}
const initialItem = (value)=>{
    console.log("this is working")
    display.innerHTML += `<div id="msg" class="msg-${j}"><li>
    
    ${localStorage.getItem(`${value}`)}
    <button class="random" id="randomBtn"><img src="remove.png" class="img"></button>
    </li>
    </div>
    `   
    let randomBtn2 = document.getElementById("randomBtn");
    randomBtn = randomBtn2;
}
if(localStorage.length!=0){
    for(let i = 0;i<localStorage.length;i++){
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        initialItem(value);
    }
}

deleteBtn.onclick=()=>{
    console.log("this ssi")
    let msg1 = document.getElementById("msg")
    if(msg1){
        
        display.innerHTML = ""
        localStorage.clear();
    }
    else{
        alert("no data found")
    }
}
btn.onclick=()=>{
    if(textArea.value){
        localStorage.setItem(`${textArea.value}`,`${textArea.value}`);
        addItem()
    }
    else{
        textArea.placeholder =`ENTER SOMETHING TO SUBMIT`
    }
    textArea.value = ""
}


console.log(display)
display.addEventListener("click",function(e){
    if(e.target.parentElement.parentElement.tagName=="LI"){
        let p = e.target.parentElement.parentElement.innerText
        console.log(e.target.parentElement.parentElement)
        localStorage.removeItem(e.target.parentElement.parentElement.innerText)
        e.target.parentElement.parentElement.remove();
    }
    
})







