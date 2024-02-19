//Linear time solution for TwoSum using objects
//Runtime increased from 117ms to 52ms

var twoSum = function(nums, target) {
    let object = {}
    //copy array into an object (associative array)
    for (let i = 0; i < nums.length; i++){
      //if object already has that key and double that value is target, return indices
      if (object.hasOwnProperty(nums[i]) && nums[i] + nums [i] === target){
          return [object[nums[i]], i]
      } 
      object[nums[i]] = i
      //if object contains complement key,
      //and not the same indice, return indices (which are stored in values of object)
      if (object.hasOwnProperty(target - nums[i]) && target-nums[i] !== nums[i]){
         return [object[target-nums[i]], i]
      }
    }
};

//https://leetcode.com/problems/two-sum/