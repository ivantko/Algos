// fucntion isValidateSubsequence(array, sequence) {
    // let arrIdx = 0;
    // let seqIdx = 0;
    // while (arrIdx < array.length && seqIdx < sequence.length) {
    //     if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    //     arrIdx++; 
    // }

    // console.log(

    function isValidSubsequence (array, sequence) {
        let mainPointer = 0;
        let seqPointer = 0;
        while (mainPointer < array.length) {
           if (array[mainPointer] === sequence[seqPointer]) {
            seqPointer++;
           }
           mainPointer++;
        }
        return seqPointer === sequence.length;
    }

    console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])); // Should return true
