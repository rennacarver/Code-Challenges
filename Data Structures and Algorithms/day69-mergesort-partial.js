function mergeSort(arrL, arrR) {
  let result = []
  let left = 0
  let right = 0

  while (left < arrL.length && right < arrR.length){
    if (arrL[left] < arrR[right]) {
      result.push(arrL[left])
      left++
    } else if (arrL[left] === arrR[right]) {
      result.push(arrR[right])
      result.push(arrL[left])
      right++
      left++
    } else if (arrL[left] > arrR[right]){
      result.push(arrR[right])
      right++
    }
  }
}

//currently pointers can go beyond end of array