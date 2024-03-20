function getGrade (s1, s2, s3) {
  
  let x = (s1 + s2 + s3) / 3
  
  switch (true) {
    case (x < 60):
        return 'F'
    case (x < 70):
        return 'D'
    case (x < 80):
        return 'C'
    case (x < 90):
        return 'B'
    case (x <= 100):
        return 'A'
    default:
        return undefined
  }
}

https://www.codewars.com/kata/55cbd4ba903825f7970000f5/solutions/javascript