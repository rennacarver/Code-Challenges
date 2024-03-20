function longest(s1, s2) {
  let arr = Array.from(s1 + s2)
  const result = arr.reduce((acc, char) => { 
    acc[char] = (acc[char] || 0) + 1;
    return acc;
   }, {});
   return Object
     .keys(result)
     .sort()
     .join('')
}

https://www.codewars.com/kata/5656b6906de340bd1b0000ac/solutions/javascript