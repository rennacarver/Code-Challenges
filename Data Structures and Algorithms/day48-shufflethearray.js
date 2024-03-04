var shuffle = function(nums, n) {
    let newArray = []
    for (let i = 0; i < n; i++){
        newArray.push(nums[i])
        newArray.push(nums[n+i])
    }
    return newArray
};

https://leetcode.com/problems/shuffle-the-array