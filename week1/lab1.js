function sumOfSquares(x, y, z){
  if(isNaN(x) || isNaN(y) || isNaN(z)){
    throw "Invalid argument"
  }
  return Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2);
}


function sayHelloTo(firstName , lastName, title){
  if(arguments.length == 0){
      throw "Invalid arguments. Provide at least the first argument"
  }
  else if (arguments.length == 1) {
       console.log(`Hello, ${firstName}`);
  }
  else if (arguments.length == 2 ) {
      console.log(`Hello, ${firstName} ${lastName}.  I hope you are having a good day!`);
  }
  else if (arguments.length == 3){
    console.log("hello");
    console.log(`Hello, ${title} ${firstName} ${lastName}.  Have a good evening!`);
  }
  else{
    throw "too many arguments.  only 3 please"
  }
}

function cupsOfCoffee(howManyCups){
  if(arguments.length != 1){
    throw "this is a single argument function";
  }
  if(isNaN(howManyCups) || !Number.isInteger(howManyCups) || howManyCups < 1){
    throw "argument must be an integer greater than 1"
  }
  for (let i = howManyCups; i > 0; i--){
     if(i == 1){
       console.log("1 cup of coffee on the desk! 1 cup of coffee. Pick it up, drink the cup, no more coffee left on the desk!\n");
     }
     else {
     console.log(`${i} cups of coffee on the desk! ${i} cups of coffee!
      Pick one up, drink the cup, ${i-1} cups of coffee on the desk!\n`);
    }
  }
}

function occurencesOfSubstring(fullString, substring){
  if(arguments.length != 2){
    throw "Please provide only 2 arguments";
  }
  let count = 0;
  while((index = fullString.indexOf(substring)) != -1){
    count++;
    if(index == (fullString.length -1)){
      return count;
    }
    fullString= fullString.substring(index + 1);
  }
  return count;

}

//credit this function to https://bost.ocks.org/mike/shuffle/
//on their implementation of the fisher-yates shuffle
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function randomizeSentences(paragraph){

  if(arguments.length != 1){
    throw "provide a single string arguments"
  }
  let re = /[.!?]/g;

  let sentences = paragraph.split(re);
  if(sentences.length == 0){
    throw "provide an argument with proper punctuation"
  }
  sentences.pop(); //get rid of empty string after last punctuation

  let enders = [];
  while((match = re.exec(paragraph)) != null){
    enders.push(paragraph[match.index]);
  }

  for (let i = 0; i < enders.length; i++){
    sentences[i] += enders[i];
  }

  shuffle(sentences);
  let sentenceString = sentences.toString();
  return sentenceString;

}


console.log(sumOfSquares(5, 3, 10));
sayHelloTo("Mr." , "Christian", "Prajzner");
cupsOfCoffee(5);
console.log(occurencesOfSubstring("Helllllo", "ll"));

var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";
console.log(randomizeSentences(paragraph));
