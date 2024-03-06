//TASK: Implement bubblesort!

function swap(array, i, j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

function bubblesort(arr) {
  //let countOuter = 0
  //let countInner = 0
  //let countSwap = 0

  for (let i = 0; i < arr.length; i++) {
    //countOuter++
    //let swapped = false
    for (let j = 0; j < arr.length - i - 1; j++) {
      //countInner++
      if (arr[j] > arr[j + 1]) {
        //countSwap++
        swap(arr, j, j + 1)
        console.log(arr)
        //swapped = true
      }
    }
    //if(!swapped) break
  }

}


let unordArr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]
let ordArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let revArr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

console.log(bubblesort(unordArr))
//console.log(`Test passed: ${bubblesort(unordArr) === ordArr}`)