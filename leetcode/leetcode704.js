var search = function(nums, target) {
    for (let index = 0; index < nums.length; index++){
        if(nums[index] === target) return index
        if(nums[index] > target) return -1
    }
    return -1
};