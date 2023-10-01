function createParagraph(){
 
   
    const sentence = document.createElement("p");
    let die1 = Math.ceil(Math.random()*6);
    let die2 = Math.ceil(Math.random()*6);
    let dieTogether = die1 + die2;
       sentence.textContent = `The value of die 1 is ${die1}, and the value of die 2 is ${die2}, the value added together being ${dieTogether}.`;
   
    document.body.appendChild(sentence);
}
const buttons=document.querySelectorAll('button');
for (const button of buttons){
button.addEventListener("click", createParagraph);
}
/*Arthur Faynin, period 9-10, 9/30/23*/
