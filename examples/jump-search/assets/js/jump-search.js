/** 
Author : Build Rise Shine 

Created : 2023 

Script : Jump Search

Description : write an algorithm for jump search

    Jump search is a searching algorithm that works on sorted arrays. It jumps ahead by a fixed step size 
    and compares the target value with the element at each jump. Once an element greater than the target 
    is found or the end of the block is reached, it performs a linear search within the block. 
    
    This approach provides a balance between efficiency and simplicity for searching in large arrays.

(c) Copyright by BRS Studio. 
**/

// Jump Search
function jumpSearch(array, target) {
  let step = Math.floor(Math.sqrt(array.length));
  console.log(step);
  let i = 0;
  while (array[i] <= target && i < array.length) {
    if (array[i] === target) {
      return i;
    }
    i += step;
  }

  // Perform binary search to refine the search around the estimate
  let low = Math.min(i - step, array.length - 1);
  let high = i;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

// Implementation
let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
const item = 610
let index = jumpSearch(arr, item);
console.log(`Number ${item} is at index ${index}`);

// BIG O Notation
// Time complexity - O(√n)
// Space complexity - O(1)
