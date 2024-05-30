
// create array with divs
let boxDiv= document.getElementById("boxDiv");
const arrayDiv= [
{name:1, color:"#BFBFBF"},
{name:2, color:"#72C3DC"},
{name:3, color:"#2F454E"},
{name:4, color:"#6F98A8"},
{name:5, color:"#2F454E"},
{name:6, color:"#72C3DC"},
{name:7, color:"#2B8EAD"},
{name:8, color:"#6F98A8"},
{name:9, color:"#2F454E"},
];
const arrayDivShuffled= [...arrayDiv
];
for(let i=1;i<arrayDiv.length+1; i++){
  const node= document.createElement("div");
   node.id =`boxDiv${i}`;
   node.className = "boxDivchild"
   boxDiv.appendChild(node) 
   node.innerHTML = `<h1>${i}</h1>`
}
//creating colored DIvs
function startAndClear(){
for(let i=0;i<arrayDiv.length; i++){
  const node= document.getElementById(`boxDiv${i+1}`);
  node.innerHTML =`<h1>${i+1}</h1>`;
  node.style.backgroundColor= arrayDiv[i].color;
     }
}
startAndClear();
//declearing buttons
document.getElementById('resetButton').addEventListener('click', function() {
  startAndClear();
});

document.getElementById('shuffleButton').addEventListener('click', function() {
  shuffle();
});
//shuffle fuction 
function shuffle(){
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  //mix
    for(let i=1;i<getRandomArbitrary(500,1000); i++){
     let j = getRandomArbitrary(0,arrayDiv.length-1);
     let bubleshuffle =arrayDivShuffled[j].name;
     arrayDivShuffled[j].name = arrayDivShuffled[j+1].name;
     arrayDivShuffled[j+1].name = bubleshuffle;
     bubleshuffle = `${arrayDivShuffled[j].color}`;
     arrayDivShuffled[j].color = `${arrayDivShuffled[j+1].color}`;
     arrayDivShuffled[j+1].color = `${bubleshuffle}`;
    
}  
//changing divs
for(let i=0;i<arrayDiv.length; i++){
  const node= document.getElementById(`boxDiv${i+1}`);
  node.innerHTML =`<h1>${arrayDivShuffled[i].name}</h1>`;
  node.style.backgroundColor= arrayDivShuffled[i].color;
  console.log("itsdone")    
}
    

 }














