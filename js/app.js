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
    output.textContent = translation.toLowerCase();
  }
}

const animateText = () =>{
    output.classList.remove("bubble-animation");
    //weird hack to get the animation class to add, doesn't work without the delay
    setTimeout(()=>{
      output.classList.add("bubble-animation");
    },10)
}

//addEventListener to button
button.addEventListener('click', ()=>{
  translateText();
  animateText();
});
