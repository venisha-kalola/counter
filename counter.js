// document.getElementById("count-er").innerText = 5

let count=0;

let  countEl=document.getElementById("count-er")
let saveEl=document.getElementById("entries")
function increment(){
    count+=1;
    countEl.innerText=count;
}

function decrement(){
    count-=1;
    countEl.textContent=count;
}

function save(){
    let countStr=" "+count+" ✦";
    saveEl.textContent+=countStr;
    console.log(count);
    count=0;
    countEl.textContent=count;
}