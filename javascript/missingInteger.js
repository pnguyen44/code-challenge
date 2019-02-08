// MissingInteger
// Write a function:
//
// function solution(A);
//
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
//
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
//
// Given A = [1, 2, 3], the function should return 4.
//
// Given A = [−1, −3], the function should return 1.
//
// Write an efficient algorithm for the following assumptions:
//
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].


function solution(A) {
  let result
  A = Array.from(new Set(A)).sort((a,b) => a - b)
  if (A[0] < 0) return 1
  for (let i = 0; i< A.length - 1; i++) {
    if (A[i] - A[i + 1] !== -1) {
      return A[i] + 1
    }
  }
    return A[A.length - 1] + 1
}


console.log(solution( [1, 3, 6, 4, 1, 2])) // 5
console.log(solution(  [1, 2, 3])) // 4
console.log(solution( [-1, -3])) // 1
