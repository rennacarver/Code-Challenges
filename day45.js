function deleteNth(arr,n){
  let newArr = []
  arr.reduce( (acc,crr) => {
        acc[crr] = acc[crr] ? acc[crr] + 1 : 1
        if (acc[crr] <= n) newArr.push(crr)
        return acc
    }, {})
  return newArr
}

https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript