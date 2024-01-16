function insertionSort(arr) {
  let len = arr.length;
  let comparisons = 0;
  for (let i = 1; i < len; i++) {
      let key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
          comparisons++;
          arr[j + 1] = arr[j];
          j = j - 1;
      }
      arr[j + 1] = key;
  }
  return { sortedArray: arr, comparisons: comparisons };
}

export default insertionSort;