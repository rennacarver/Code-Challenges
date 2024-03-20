function validatePIN (pin) {
  
  let re = /^\d{4}$|^\d{6}$/
  
  return  re.test(pin)

}

https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/solutions/javascript