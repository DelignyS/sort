function selectionSort(arr) {
    let len = arr.length;
    let comparisons = 0;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            comparisons++;
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return { sortedArray: arr, comparisons: comparisons };
}

export default selectionSort;