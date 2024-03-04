var maxSubArray = function(nums) {
    let maxSum = nums[0]
    let currSum = 0
    for (k in nums){
        if (currSum < 0)
            currSum = 0
        currSum += nums[k]
        //console.log(currSum)
        maxSum = Math.max(currSum, maxSum)
    }
    return maxSum
};

//https://leetcode.com/problems/maximum-subarray/