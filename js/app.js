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
const form = document.getElementById('pig-latin');

//Translate
let translateText = (e) => {
  //grab input value
  let english = document.getElementById('english').value;
  let translation = pigLatin(english);
  //output answer
  output.textContent = translation;
}

//addEventListener to form  and prevent form default submit, which really screws things up
form.addEventListener('submit', (e)=>{
  translateText();
  e.preventDefault();
});
