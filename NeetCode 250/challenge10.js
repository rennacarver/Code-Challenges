function findNumOfPairs(a, b) {
  //pair each element from [a] with the smallest element from [b]
  //exit the loop once an element from a has been paired off
  let numOfPairs = 0

  a.sort((a, b) => a - b)
  b.sort((a, b) => a - b)

  console.log(`a:`)
  console.log(a)
  console.log(`b:`)
  console.log(b)

  for (let k in a) {
    for (let j in b) {
      if (a[k] > b[j]) {
        b.shift()
        numOfPairs += 1
        console.log(`a[${k}] > b[${j}]`)
        break
      }
    }
  }
  return numOfPairs
}

function findCompletePrefixes(names, query) {
  let result = []

  //loop through query list
  for (let k in query) {
    let counter = 0
    for (let j in names) {
      if (names[j].startsWith(query[k]) && names[j] !== query[k]) {
        //console.log(`${names[j]} starts with ${query[k]}`)
        counter += 1
      }
    }
    result.push(counter)
  }
  //console.log(result)
  return result
}
