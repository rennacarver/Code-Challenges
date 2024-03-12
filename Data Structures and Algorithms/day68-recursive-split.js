function recurseSplit(arr) {
  if (arr.length === 1) {
    console.log(arr)
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  console.log(left + " + " + right)
  return recurseSplit(left).concat(recurseSplit(right));
}


console.log(recurseSplit([1,6,8,11,-1,3]))

//building the recursive loop for mergesort