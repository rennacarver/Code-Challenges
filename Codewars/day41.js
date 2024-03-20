function disemvowel(str) {
  const regex = new RegExp('[aeiouAEIOU]')
  return str
    .split('')
    .filter( char => !regex.test(char))
    .join('')
}

//https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript