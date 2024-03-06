function binarySearch(arr, target) {
  //create lower, middle, and upper pointers
  let lower = 0
  let upper = arr.length - 1
  let mid = 0

  while (lower <= upper) {
    mid = Math.floor(lower + (upper - lower) / 2)

    if (arr[mid] === target) {
      return mid
    }
    if (arr[mid] < target) {
      lower = mid + 1
    } else {
      upper = mid - 1
    }

  }

  return -1
}
//note: [upper + lower / 2] can lead to overflow
//better to use [lower + (upper - lower) / 2]