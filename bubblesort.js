function bubbleSort(arr) {
    let len = arr.length;
    let comparisons = 0;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            comparisons++;
            if (arr[j] > arr[j + 1]) {
                // swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return { sortedArray: arr, comparisons: comparisons };
}

export default bubbleSort;