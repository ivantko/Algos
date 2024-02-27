 
 
 
 // Test cases
//  console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)); // Example output: [11, -1]
//  console.log(twoNumberSum([4, 6], 10)); // Example output: [4, 6]
//  console.log(twoNumberSum([4, 6, 1], 5)); // Example output: [4, 1]
//  console.log(twoNumberSum([4, 6, 1, -3], 3)); // Example output: [-3, 6]
//  console.log(twoNumberSum([1, 2, 3, 4, 5], 100)); // Example output: []
//  console.log(twoNumberSum([-21, 201, 12, 4, 65, 56, 210, 9, -47], 163)); //test case #8



//take in a non-empty array of distinct integers and an integer representing a target sum. 
//if any two numbers in the input array sum up to the target sum, the function should return them in any order.
//if no two numbers sum up to target sum, then return an empty array.

// function twoNumberSum(array, targetsum) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] + array[j] === targetsum) {
//                 return [array[i], array[j]]
//             }
//         }
//     }
//     return [];
// }

















console.log(twoNumberSum([4,2,11,34,5], 9))