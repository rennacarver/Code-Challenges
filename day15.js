function getSum(a, b)
{
   let max = 0;
   let min = 0;
   let sum = 0;
    
    //return the value if they are equal
   if(a===b) {
       return a;
   }

   //set max to larger value
   if(a>b){
       console.log("a is larger than b")
       max = a;
       min = b;
   } else {
       console.log("a is less than b")
       max = b;
       min = a;
   }
   
   for (let i = min; i<=max; i++){
       console.log(i)
       sum += i;
   }
   
   return sum;
}

https://www.codewars.com/kata/55f2b110f61eb01779000053/solutions/javascript