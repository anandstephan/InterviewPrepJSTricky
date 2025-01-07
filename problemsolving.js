//Q1. Contains Duplicate

//Brutce Force
function containsDuplicate(nums) {
  //   for (let i = 0; i < nums.length - 1; i++) { //Time Complexity is O(N*N)
  //     let flag = false;
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] == nums[j]) {
  //         flag = true;
  //         break;
  //       }
  //     }
  //     if (flag) return flag;
  //   }
  //   return false;
  //   let obj = {}; //Time complexity of is O(N) + Space Complexity is O(1)
  //   for (let i = 0; i < nums.length; i++) {
  //     if (obj[nums[i]]) {
  //       return true;
  //     }
  //     obj[nums[i]] = true;
  //   }
  //   return false;
}

// console.log(containsDuplicate([1, 2, 3, 4, 5]));
