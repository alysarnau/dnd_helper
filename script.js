let diceNumber = document.querySelector("#diceNumber");
let diceSide = document.querySelector("#diceSide");


function rollDice () {
  return(Math.floor(Math.random() * diceSide));
}

for (let i = 0; i < diceNumber; i++) (console.log(rollDice()));    

    //diceSide is the type of Die it is - example, a d4 is 4, etc., needs
    //to choose a random number between 1 and diceSide

let btns = document.querySelectorAll(".rollDice");

btns.forEach(btn => btn.addEventListener('click', function(e) {
    rollDice();
    //need to set id slash value for dice
  })
)

btn.addEventListener('click', function (e) {
    console.log(rollDice());
    let para = document.createElement('div');
    btnDiv.appendChild(para);
    para.textContent = `Here is a test.`;
  }
);

let btnDiv = document.querySelector('#rollDice');

//append result of each roll to results div