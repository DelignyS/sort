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

/*
The quicksort algorithm works by selecting a 'pivot' element from the array and partitioning the other elements into
 two sub-arrays, according to whether they are less than or greater than the pivot. The pivot selection and partitioning
  steps are done by the `pivot` function: it selects the pivot and moves all elements less than the pivot to its left, 
  and all elements greater than it to its right.

The algorithm then recursively sorts the sub-arrays. This is done in the `quickSort` function, which calls itself for the 
two halves of the array, divided by the pivot. If the 'left' index is less than the 'right' index, the function recursively 
calls itself with the 'left' part of the array (from 'left' to 'pivotIndex - 1') and the 'right' part 
(from 'pivotIndex + 1' to 'right').

The base case for the recursion is arrays of size zero or one, which never need to be sorted.

The process continues until the base case is reached, i.e., the array to be sorted is of size 1, in which case the recursion 
ends, and the array is returned as it is.

This divide-and-conquer strategy is what gives quicksort its efficiency, and it's why it's one of the most widely used sorting 
algorithms in practice.
*/