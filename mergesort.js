function merge(left, right, comparisons) {
  let result = [], i = 0, j = 0;

  while (i < left.length && j < right.length) {
      comparisons++;
      if (left[i] < right[j]) {
          result.push(left[i++]);
      } else {
          result.push(right[j++]);
      }
  }

  return { mergedArray: result.concat(left.slice(i)).concat(right.slice(j)), comparisons: comparisons };
}

function mergeSort(arr, comparisons = 0) {
  if (arr.length < 2) {
      return { sortedArray: arr, comparisons: comparisons };
  }

  let mid = Math.floor(arr.length / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid);

  let resultLeft = mergeSort(left, comparisons);
  let resultRight = mergeSort(right, resultLeft.comparisons);
  let resultMerge = merge(resultLeft.sortedArray, resultRight.sortedArray, resultRight.comparisons);

  return { sortedArray: resultMerge.mergedArray, comparisons: resultMerge.comparisons };
}

export default mergeSort;

/* Merge sort is a divide-and-conquer sorting algorithm that works by breaking down an unsorted array
 into smaller subarrays, sorting those subarrays, and then merging them back together to achieve a sorted array.

The process begins by dividing the unsorted array into two halves. If the array contains only one element, 
it is already sorted and no further action is required. If the array contains more than one element, the algorithm 
recursively divides the array into two halves until it has broken down the array into subarrays of single elements.

Once the array has been broken down into single elements, the merge process begins. This involves comparing the elements
 of the subarrays and merging them in sorted order. The merge process continues until all the subarrays have been merged
  back into a single sorted array.

The key to the merge sort algorithm is the merge step, where two sorted subarrays are combined into a single sorted array.
 This is typically done by setting up a loop that looks at the smallest unprocessed element in each subarray and copies the 
 smaller of these two elements to the final sorted array.

Overall, merge sort is a very efficient sorting algorithm with a time complexity of O(n log n), making it a good choice for 
sorting large datasets.*/
