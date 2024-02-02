function stars(num){
  starStr = ''
  for (i = 1; i <=num; i++){
    starStr += "*"
  }
  return starStr
}

function spaces(num){
  spaceStr = ''
  for (i = 1; i <=num; i++){
    spaceStr += " "
  }
  return spaceStr
}

function towerBuilder(nFloors) {
  let arr = []
  for (let i = 1; i<=nFloors; i++){
    arr[i-1] = `${spaces(nFloors-i)}${stars(2*i-1)}${spaces(nFloors-i)}`
  }
  return arr
}

https://www.codewars.com/kata/576757b1df89ecf5bd00073b/solutions/javascript