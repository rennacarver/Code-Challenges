// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

//Parameters -> no inputs
//Return -> console log the output
//Example -> 
// 15 --> fizzbuzz
// 10 --> buzz
// 6 --> fizz
// 4 --> 4


//for loop that iterates from 1 to 100
//if statement that checks if the number is divisible by 3 and 5
//if else statement that checks if the number is divisible by 5
//if else statement that checks if the number is divisible by 3
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz')
  } else if (i % 5 === 0) {
    console.log('buzz')
  } else if (i % 3 === 0) {
    console.log('fizz')
  } else
    console.log(i)
}