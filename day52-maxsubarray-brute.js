var maxSubArray = function(nums) {
    //set max sum to the first value in array
    let max = nums[0]

    //this for loop creates an array of size 1 up to an array of size of nums
    for(let i = 1; i<= nums.length; i++){
       //this for loop moves through nums by subarray size, checking sum
       //as subarray size increases, the sliding window moves less steps
       for (let j = 0; j <= nums.length - i; j++){
           let subArray = []
           let currSum = 0
           //loop through subarray summing all the values
           for (let k = 0; k < i; k++){
               subArray.push(nums[j+k])
               currSum += nums[j+k]
           }
           console.log(subArray)
           console.log(`max is: ${max}`)
           console.log(`subArray sum: ${currSum}`)
           if (currSum > max)  {
               max = currSum
               console.log (`max value updated to ${max}`)
           }
       }
    }
    return max
};

//https://leetcode.com/problems/maximum-subarray/