function sortMyString(S) {
    let array = S.split('')
    let even = []
    let odd = []
    for (k in array) {
      if ( k % 2 === 0 ){
        even.push(array[k])
      } else {
        odd.push(array[k])
      } //if-else
    } //for
    return [...even,' ',...odd].join('')
}

//https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript