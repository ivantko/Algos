// Write a function that takes in a non-empty array of distinct integers  and an integer representing a target sum. 
// If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. 
// If no two numbers sum up to the target sum, the function should return an empty array. 
// Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.
// You can assume that there will be at most one pair of numbers summing up to the target sum. 

//Solution 1:

// function twoNumberSum (array, targetSum) {
//     for ( let i = 0; i < array.length; i++) {
//         const firstnum = array[i];
//         for (let j = i + 1; j < array.length; j++) {
//             const lastnum = array[j];
//             if (firstnum + lastnum === targetSum) {
//                 return [firstnum, lastnum]
//             }
//         }
//     }
//     return []
// }

//Solution 2:

// function twoNumberSum (array, targetSum) {
//     for (let i = 0; i < array.length; i ++) {
//         for (let j = i + 1; j < array.length; j ++) {
//             if (array[i] + array[j] === targetSum) {
//                 return[array[i], array[j]];
//             }
//         }
//     }
//     return [];
// }

//Solution 3:

// function twoNumberSum(array, targetSum) {
//   //keep track of the number we've seen while iterating over the array
//   //we use a Set so we can check if a given has been seen in O(1)
//   const seen = new Set();

//   for (let num of array) {
//     // complement is the number that will sum up to target when added to the current number we are considering
//     const complement = targetSum - num;
//     // if we've seen the complement before then we have a pair of number summing up to target
//     if (seen.has(complement)) {
//       return [num, complement];
//     }
//     // Mark the number as seen
//     seen.add(num);
//   }
//     return [];
// }

  


// function twoNumberSum (array, targetSum) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i +1 ; j < array.length; j++) {
//       if (array[i] + array[j] === targetSum) {
//         return [array[i], array [j]];
//       }
//     }
//   }
//   return[];
// }





// Test cases
  console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)); // Example output: [11, -1]
  console.log(twoNumberSum([4, 6], 10)); // Example output: [4, 6]
  console.log(twoNumberSum([4, 6, 1], 5)); // Example output: [4, 1]
  console.log(twoNumberSum([4, 6, 1, -3], 3)); // Example output: [-3, 6]
  console.log(twoNumberSum([1, 2, 3, 4, 5], 100)); // Example output: []
  console.log(twoNumberSum([-21, 201, 12, 4, 65, 56, 210, 9, -47], 163)); //test case #8