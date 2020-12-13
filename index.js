
//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

 //@param {number} number1
 //@param {number} number2
 //@return {number} product
const multiplication = (number1, number2) => {
  let product = 0;
  for( let i = 0; i < number1; i++){
    product += number2;
  }
  return product;
}

const answer1 = multiplication(2,2)
console.log('answer1', answer1)

const htmlTarget = document.getElementById('a-1')
htmlTarget.innerHTML = answer1



//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the string to determinate if the character is vowel or a consonant. you have to store each character on separates arrays, one for vowels and the other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels first or consonants first in the final array.
//hint:

//@param {string}
//@return {character} => array of characters

vowelOrConsonant = (string) => {
  //declared some var
  let vowels = [];
  let constants = [];
  let length = string.length;
  let newString = string.toLowerCase();
  let joinedChar = [];

  for (let i = 0; i < length; i++){
    let letter = newString[i];
    //really struggled here since I kept using charAt() w/o realizing it was dependent on a string
    if (letter == 'a' ||
    letter == 'e' ||
    letter == 'i' ||
    letter == 'o' ||
    letter == 'u'){
      vowels.push(newString[i]);
    }
    else{
      constants.push(newString[i]);
    }
  }
  
  let answer = prompt("Would you like the vowels first? Type yes/no.");
  answer = answer.toLowerCase();
  
  if (answer === "yes"){
    joinedChar = [...vowels, ...constants];
   
  }
  else if (answer === "no") {
    joinedChar = [...constants, ...vowels];
   
  }

  return joinedChar;  
}

const answer2 = vowelOrConsonant("tea");

const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2




//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).The player has 3 oportunities to guess a number. The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an alert and stop the game, but if the player finds the number, then the program must show a congratulations message (alert) with the name of the player in upperCase letters and stop the game
//You must have to store the player information in a 'player' object. The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents the remaining oportunities each time the player fails. Fail_numbers, is an array of numbers that stores the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or the name if the player wins


guessTheNumber  = () => {
  let player = {
    name: "",
    lives: 3,
    fail_numbers: [],
  }

  let name = prompt("What is your name?");
  player.name = name;
  let answer;
  let message;

  const randomNum = parseInt(Math.random()*40 + 10);

  for (let i = player.lives; i > 0; i--){
    
    answer = prompt("Guess a value from 10 to 50:")
    answer = parseInt(answer);

  
    if (answer === randomNum){
      alert(`congrats ${player.name.toUpperCase()}! the number was ${randomNum} and your number was ${answer}`);
      message = "Player wins!";
      break;
    }
    else if (answer !== randomNum){
      player.fail_numbers.push(answer);
      player.lives--;
    }
    else{
      alert("You did not enter a value.");
    }

  }
  if (player.lives === 0){
    alert("Sorry, you ran out of tries");
    message = "Player used up all opportunities.";
  }
  
  return message;
}

const answer3 = guessTheNumber()


const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3



//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. Ask to the user for 3 diferentes options to sorting the array from the highest to lowest. In the case of a string, the criteria to sort must be the length of the string. The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the third one based on the library property. finally, the return value has to be the string sorted of the property selected separeted with a semicolon. Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"

sort = () => {

  var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

   
   let choice = prompt("Which property would you like: title, author, libraryID.").toLowerCase();;
   let sorted = "";

   if (choice === "title"){
      sorted = sorting("title"); //calling Function

     }   
   else if (choice === "author"){
     sorted = sorting("author"); //calling Function

   }
   else if (choice === "libraryid"){
   
    let idList = [];
    for (book in library){
      idList.push(library[book].libraryID); //made a new array and sorted it
    }

    idList.sort(function(a, b){
      return b-a
    });

    sorted = `${idList[0]}, ${idList[1]}, ${idList[2]}`;
   }
   else{
     alert("You did not make a selection.");
   }

   return sorted;

   function sorting (choice) {
    let newList = "";
    let a = library[0][choice].length;
    let b = library[1][choice].length;
    let c = library[2][choice].length;
  
    if (c < a && a < b){ //used the transitivity property and then had the order switched in the newList String
      newList = `${library[1][choice]}; ${library[0][choice]}; ${library[2][choice]}.`;
    }
    else if (a < c && c < b){
      newList = `${library[1][choice]}; ${library[2][choice]}; ${library[0][choice]}.`;
    }
    else if (b < a && a < c){
      newList = `${library[2][choice]}; ${library[0][choice]}; ${library[1][choice]}.`;
    }
    else if (b < c && c < a){
      newList = `${library[0][choice]}; ${library[2][choice]}; ${library[1][choice]}.`;
    }
    else if (c < b && b < a){
      newList = `${library[0][choice]}; ${library[1][choice]}; ${library[2][choice]}.`;
    }
    else{
      newList = `${library[2][choice]}; ${library[1][choice]}; ${library[0][choice]}.`;
    }
  
    return newList;
  
  }


}




const answer4 = sort()

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4
