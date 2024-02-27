// function isValidSubseq (array, sequence) {
//     let mainPointer = 0;
//     let seqPointer = 0;
//     while (mainPointer < array.length) {
//         if (array[mainPointer] === sequence[seqPointer]) {
//             seqPointer++;
//         }
//         mainPointer++;
//     }
//     return seqPointer === sequence.length;
// }



// function isValidSubseq (array, sequence) {
//     let mainPointer = 0;
//     let seqPointer = 0; 
//     while (mainPointer < array.length) {
//         if (array[mainPointer] === sequence[seqPointer]) {
//             seqPointer++;
//         }
//         mainPointer++;
//     }
//     return seqPointer === sequence.length;
// }

// function isValidSubseq(array1, array2) {
//     //start pointers at index 0 and iterater with while loop
//     let mainPointer = 0;
//     let seqPointer = 0;
//     while (mainPointer < array1.length) {
//         if (array1[mainPointer] === array2[seqPointer]) {
//             seqPointer++;
//         }
//         mainPointer++;
//     }
//     return seqPointer === array2.length
         
//     }

// function isValidSubseq(array, sequence) {
//     let mainPointer = 0;
//     let seqPointer = 0;
//     while (mainPointer < array.length) {
//     //iterate over array index until pointer reaches end of main array while checking if it matches pointer of second array
//     if (array[mainPointer] === sequence[seqPointer]) {
//         seqPointer ++;
//     }
//     mainPointer++;
//     }
//     return seqPointer === sequence.length
// }















console.log(isValidSubseq([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])); // Should return true