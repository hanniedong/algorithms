/*
Find midpoint of array 
If target === midpoint, return index
If target > midpoint, return spliced array(midpoint)
If target < midpoint, return spliced array(0, midpoint)
If array === 1, return array.indexOf(arrray[0]) + 1
*/
searchInsert = function(nums, target) {
  const { length } = nums;
  if (nums.length === 0) {
    return 0;
  }
  const start = nums[0];
  const end = nums[length - 1];
  if (target <= start) {
    return 0;
  } else if (target > end) {
    return length;
  } else if (target === end) {
    return length - 1;
  } else {
    for (let i = 0; i < length - 1; i++) {
      if (target > nums[i] && target <= nums[i + 1]) {
        return i + 1;
      }
    }
  }
};
