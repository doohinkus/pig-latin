import '../css/_index.scss';

const startsWithVowel = (word) => word.replace(/^(.*)$/i, "$1ay");
const startsWithConsonant = (word) => word.replace(/^(.?qu|.[^aeiou]*)(.*)$/i, "$2$1ay");

const splitSentence = (sentence) => sentence.split(" ");
const stripPunctuation = (sentence) => sentence.replace(/[!\.\,\?]/g, "");

let pigLatin = (sentence) => {
  //grab and clean words from input
   let cleanSentence = stripPunctuation(sentence);
   let words = splitSentence(cleanSentence);
  //run pig latin on each word
   let pigLatinWords = words.map((word)=>{
     //find out whether words starts with vowel or not
       let wordStartsWithVowel = /^[aeiou]/i.test(word);
       return wordStartsWithVowel ?
          startsWithVowel(word) :
          startsWithConsonant(word);
   });
   return pigLatinWords.join(" ");
}

/*User interaction*/

//grab reference to form
const button = document.getElementById('translate');
//reference to output
const output = document.getElementById('output');

//Translate
const translateText = () => {
  //grab input value
  const english = document.getElementById('english').value;
  if (english !=""){
    let translation = pigLatin(english);
    //output answer
    output.textContent = translation;
  }
}

const animateText = () =>{
  if (output.classList.contains("bubble-animation")){
    output.classList.remove("bubble-animation");
  }
  output.classList.add("bubble-animation");
}

//addEventListener to form  and prevent form default submit, which really screws things up
button.addEventListener('click', ()=>{
  translateText();
  animateText();
  // e.preventDefault();
});
