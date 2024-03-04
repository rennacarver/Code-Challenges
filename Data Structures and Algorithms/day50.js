function persistence(num) {
    
   //if a single digit is passed in return 0
   if (num < 10)
      return 0
   
   //split number into digits
   let digits = num.toString().split('')
   //console.log('list of digits')
   //console.log(digits)
   
   //find product of digits
   let product = digits.reduce((prod, curr) => prod * curr, 1)
   //console.log('Product:')
   //console.log(product)
   
   //call function recursively as long as product is larger than or equal to 10
   if(product >= 10)
      return 1 + persistence(product)
   //if next recursive call is final call, return 1
   else if (product < 10)
      return 1
}

//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript