let diceNumber;
let diceSide;



function rollDice (diceNumber,diceSide) {
    // diceNumber is how many times the operation needs to loop
    for (let i = 0; i < diceNumber; i++) {
    //diceSide is the type of Die it is - example, a d4 is 4, etc., needs
    //to choose a random number between 1 and diceSide
    console.log(Math.floor(Math.random() * diceSide));
    }
}

//append result of each roll to results div