// function isValidSubsequence(array, sequence) {
//     let arrIdx = 0;
//     let seqIdx = 0;
//     while (arrIdx < array.length && seqIdx < sequence.length) {
//         if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
//         arrIdx++; 
//     }
//     return seqIdx === sequence.length;
// }

    // function isValidSubsequence (array, sequence) {
    //     let mainPointer = 0;
    //     let seqPointer = 0;
    //     while (mainPointer < array.length) {
    //        if (array[mainPointer] === sequence[seqPointer]) {
    //         seqPointer++;
    //        }
    //        mainPointer++;
    //     }
    //     return seqPointer === sequence.length;
    // }

function isValidSubsequence(array, subseqArray) {
//set pointer to index 0 for both arrays and iterate over the arrays
let mainPointer = 0;
let seqPointer = 0;
// while loop until iteration ends for 2nd array, move pointers up
while (mainPointer < array.length) {
    if (array[mainPointer] === subseqArray[seqPointer]) {
        seqPointer++;
    }
    mainPointer++;
}
return seqPointer === subseqArray.length;
}







console.log(isValidSubsequence([6, 1, 22, 25, 5, -1, 8, 10], [1, 6, -1, 10])); 



    // console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])); // Should return true

