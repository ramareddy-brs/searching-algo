/** 
 Author : Build Rise Shine 

Created : 2023

Script : Linear Search 

Description : Implementation of Linear Search Algorithm

    Linear search, also known as sequential search, is a simple searching algorithm that checks each 
    element in a collection until it finds the target value or reaches the end.
    
    It traverses the elements one by one, making it suitable for unsorted or small-sized arrays. 
    However, it has a time complexity of O(n) as the search time grows linearly with the size of the input.

(c) Copyright by BRS Studio. 
**/

// Linear Search - returns the index if the element is found or else returns -1
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Implementation
const item = 10    //item to search
const linSearch = linearSearch([1, 5, 2, 6, 65, 22, 33, 10, 22], item);
console.log(`Element ${item} found at index ${linSearch}`);


// BIG O Notation
// Time complexity - O(n)
// Space complexity - O(1)