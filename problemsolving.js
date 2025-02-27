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

//Question 2 Valid Anagram
function validAnagarm(s, t) {
  //   if (s.length !== t.length) return false; // Time Complexity O(3N) with Time space complexity O(2N)
  //   const sMap = {},
  //     tMap = {};
  //   for (let i = 0; i < s.length; i++) {
  //     if (sMap[s[i]]) {
  //       sMap[s[i]] += 1;
  //     } else {
  //       sMap[s[i]] = 1;
  //     }
  //   }
  //   for (let i = 0; i < t.length; i++) {
  //     if (tMap[t[i]]) {
  //       tMap[t[i]] += 1;
  //     } else {
  //       tMap[t[i]] = 1;
  //     }
  //   }
  //   let objkeyval = Object.keys(sMap);
  //   for (let i = 0; i < objkeyval.length; i++) {
  //     if (sMap[objkeyval[i]] !== tMap[objkeyval[i]]) return false;
  //   }
  //   return true;
}

// console.log(validAnagarm("anagram", "nagaram"));

//Question 3
function TwoSum(arr, target) {
  //Brutce Force // Time complexity of O(N*N)
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[i] + arr[j] == target) return true;
  //     }
  //   }
  //   return false;
  //Time Complexity of O(n) with space complexity of O(N)
  // let obj = {};
  // for (let i = 0; i < arr.length; i++) {
  //   obj[arr[i]] = i;
  // }
  // const result = []
  // for(let i=0;i<arr.length;i++){
  //   const newtarget = target - arr[i]
  //   if(obj[newtarget]){
  //     result.push(obj[newtarget])
  //     result.push(i)
  //   }
  // }
  // return result
}

// console.log(TwoSum([2, 7, 11, 15], 9));

//Question 5  Maximum Subarray // Sumeet Malik Solution
var maxSubArray = function (arr) {
  let csum = arr[0];
  let osum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (csum >= 0) {
      csum += arr[i];
    } else {
      csum = arr[i];
    }
    if (csum > osum) osum = csum;
  }
  return osum;
};


