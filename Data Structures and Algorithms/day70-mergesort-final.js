function recurseSplit(arr) {
  if (arr.length === 1) {
    console.log(arr)
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  //console.log(left)
  //console.log(right)
  return mergeSort(recurseSplit(left), recurseSplit(right))
}

function mergeSort(arrL, arrR) {
  let result = []
  let left = 0
  let right = 0

  while (left < arrL.length && right < arrR.length) {
    if (arrL[left] < arrR[right]) {
      result.push(arrL[left])
      left++
    } else if (arrL[left] === arrR[right]) {
      result.push(arrR[right])
      result.push(arrL[left])
      right++
      left++
    } else if (arrL[left] > arrR[right]) {
      result.push(arrR[right])
      right++
    }
  }
  return [...result, ...arrL.slice(left), ...arrR.slice(right)]

}