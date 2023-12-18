function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length - 1; i++) {
      const firstNum = array[i];
      for (let j = i + 1; j < array.length; j++) {
        const secondNum = array[j];
        if (firstNum + secondNum === targetSum) {
          return [firstNum, secondNum];
        }
      }
    }
    return [];
  }
  
  // Test cases
  console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)); // Example output: [11, -1]
  console.log(twoNumberSum([4, 6], 10)); // Example output: [4, 6]
  console.log(twoNumberSum([4, 6, 1], 5)); // Example output: [4, 1]
  console.log(twoNumberSum([4, 6, 1, -3], 3)); // Example output: [-3, 6]
  console.log(twoNumberSum([1, 2, 3, 4, 5], 100)); // Example output: []
  console.log(twoNumberSum([-21, 201, 12, 4, 65, 56, 210, 9, -47], 163)); //test case #8