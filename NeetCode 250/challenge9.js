process.stdout.write('Hi, ' + input + '.\n') // Writing output to STDOUT

matrix = input.replaceAll('"', '') //remove double quotes from string
matrix = matrix.split(';') //split string into 1D array on semicolons
matrix.pop() //remove empty element from array following last semicolon

let m = matrix.length + 1

let firstCol = matrix[0].split(':') //use first semicolon entry to define matrix column #
firstCol.pop() //remove column name
firstCol = firstCol[0].split(',') //break into comma list
let n = firstCol.length / 2 + 1 //each data comes in a pair

console.log(matrix)
console.log(`n:${n}`)
console.log(`m:${m}`)
console.log(`1st data column: ${firstCol}`)

let finalMatrix = []
for (let k in matrix) {
  finalMatrix.push(matrix[k].split(':L')[1]) //pull column headers
}
finalMatrix.unshift('') //add empty space at [0,0]

console.log(finalMatrix)
console.log(firstCol)

//iterate through data list e.g. [ '5.0,100,5.5,101,6.0,102:L10', '5.0,99,5.5,100,6.0,101:L20' ]
for (let k in matrix) {
  let column = matrix[k].split(':L')[0].split(',')
  //iterate through values e.g. [5.0,100,5.5,101,6.0,102]
  for (let j in column) {
    console.log(column[j])
  }
}
