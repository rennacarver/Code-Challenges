function solution(nums){
  if (nums === null || nums.length === 0) return []
  return nums.sort((a, b) => a - b)
}

//https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript