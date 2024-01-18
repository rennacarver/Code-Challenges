function smash (words) {
   let sentence = ''
   for (let i = 0; i<= words.length - 1; i++){
       if(words[i+1]){
           sentence += words[i] + " "
       } else {
           sentence += words[i]
       }
       
   }
   return sentence
};

https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript