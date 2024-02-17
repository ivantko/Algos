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





function isValidSubseq (array, sequence) {
    mainPointer = 0;
    seqPointer = 0;
    while (mainPointer < array.length) {
        if (array[mainPointer] === sequence[seqPointer]) {
            seqPointer++;
        }
        mainPointer++
    }
    return seqPointer === sequence.length;
}









console.log(isValidSubseq([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])); // Should return true