function duplicateCount(text){
  let dupCount = 0
  let count = text
              .toLowerCase()
              .split('')
              .reduce( (acc,crr) => {
                  acc[crr] = acc[crr] ? acc[crr] + 1 : 1
                  if (acc[crr] === 2) dupCount++
                  return acc
              }, {})
  return dupCount
}

//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript