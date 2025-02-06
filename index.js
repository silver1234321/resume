const text = document.getElementById("text");
const heart=document.getElementById("heart");
const heading=document.getElementById("heading");
const card=document.getElementById("card");
const e_open=document.getElementById("envelope_open");
const e_closed=document.getElementById("envelope_closed");
let i=0;
function multiply(){
    if(i == 0){
        text.textContent="please ";
        i=i+1;
    }
    else{
    s1=text.textContent;
    text.textContent+=s1;    
    i*=2;
    if(i%16===0){
        text.textContent+="\n"; 
    }
}
}
var click= document.getElementById("yes");   
var click2=document.getElementById("no");
click2.addEventListener("mouseover",function(){
    heart.classList.remove("hidden");
    heart.classList.add("broken");
    console.log(heart.classList);
});
click2.addEventListener("mouseout",function(){
    heart.classList.remove("broken");
    heart.classList.add("hidden")
    console.log(heart.classList);

})

// click.addEventListener("click",function(){
//     heart.classList.add("arrow");
//     heading.remove()
//     click.remove();
//     click2.remove();
//     text.remove();
//     part2()
//     console.log(heart.classList);
    
    
// });
click.addEventListener("mouseover",function(){
    heart.classList.remove("hidden");
    heart.classList.add("heart");
    heading.classList.add("heart");
    console.log(heart.classList);
});
click.addEventListener("mouseout",function(){
    heart.classList.remove("heart");
    heading.classList.remove("heart");
    heart.classList.remove("arrow");
    heart.classList.add("hidden")

})
function enlarge(){
    heart.classList.add("arrow");
    heading.remove()
    click.remove();
    click2.remove();
    text.remove();
    part2()
}
function part2(){
    setTimeout(() => {
        heart.classList.remove("arrow");
        heart.classList.add("heart");
        e_closed.classList.add("arrive");
        e_closed.classList.remove("hidden_away");
        // card.classList.add("arrive");
        // card.classList.remove("hidden");
        part3();
    }, 4000);
}
function part3(){
    setTimeout(() => {
        e_closed.remove();
        e_open.classList.remove("hidden_away");
        part4();
    }, 1700);
}
function part4(){
    card.classList.add("exit")
    setTimeout(() => {
        card.classList.remove("hidden_away");
    }, 500);
    setTimeout(() => {
        e_open.classList.add("envelope");
    }, 1300);
    setTimeout(() => {
        e_open.remove();
    }, 2000);
}