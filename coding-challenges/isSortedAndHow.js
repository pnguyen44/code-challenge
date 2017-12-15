// 7 kyu
// Implement the method isSortedAndHow, which accepts an array of integers, and returns one of the following:
//
// 'yes, ascending' - if the numbers in the array are sorted in an ascending way
// 'yes, descending' - if the numbers in the array are sorted in a descending way
// 'no'
// You can assume the array will always be valid, and there will always be one correct answer.


function isSortedAndHow(array) {
return array.every((e, i) => i === 0 || array[i] >= array[i - 1]) ? 'yes, ascending' :

      array.every((e, i) => i === 0 || array[i] <= array[i - 1]) ? 'yes, descending' : 'no'
}
