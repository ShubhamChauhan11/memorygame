const arr= [1,2,3,4,5,6,7,8,9];
const divcontainer= document.getElementById("game-container")
const inputcontainer= document.getElementById("input-container");
const strtbtn= document.getElementById("start-game");
const submitbtn= document.getElementById("submit")
const startagainbtn= document.getElementById("start-again")
let arr2= []
function startgame(){
     arr.sort(()=>{
          return Math.random()-0.5;
     });
     let j=0;
     while(j<arr.length){
          arr2.push(arr[j]);
          j++;
     }
     

     
     
     const gamecontainer= document.querySelectorAll(".divs");
     console.log(gamecontainer);
     let i=0;
     gamecontainer.forEach((element)=>{
          element.innerHTML= arr2[i];
          i++;
     
     })
     setTimeout(()=>{
          divcontainer.style.display= "none"
          inputcontainer.style.display= "grid"
          strtbtn.style.display="none"
          submitbtn.style.display= "block"
          startagainbtn.style.display="block"
          

     },2000)
}
const resulee= document.getElementById("result")
console.log(arr2);
function submit(){
      
     const inputele= document.querySelectorAll(".inpute");
     let i=0;
     inputele.forEach((element)=>{
          if(element.value=== arr2[i]){
               console.log(arr[i]);
               console.log(element.value);
               i++;
               
          }
          console.log(i);
          if(i==9){
               resulee.innerHTML= "YOU WON";
          }
          
         
       
     })
     
    
     
     
     
     resulee.style.display="block"
     resulee.style.textAlign= "center"
     
 

}
function restart(){
    divcontainer.style.display= "grid";
    inputcontainer.style.display= "none";
    startagainbtn.style.display= "none"
    startgame()

}     

