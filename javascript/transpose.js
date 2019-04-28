// Transpose Matrix
// Given a matrix A, return the transpose of A.
//
// The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.
//
//
//
// Example 1:
//
// Input: [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]
// Example 2:
//
// Input: [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]
//
//
// Note:
//
// 1 <= A.length <= 1000
// 1 <= A[0].length <= 1000

var transpose = function(A) {
    let result = []
    for (let i = 0; i < A[0].length; i++) {
        let current = A[i]
        let newCombo = []
        console.log('i..', i)
        for (let j = 0; j < A.length; j++ ) {
          console.log('j, i', j , i)
          console.log('add', A[j][i])
          newCombo.push(A[j][i])
        }
        console.log('newCombo', newCombo)
        result.push(newCombo)
    }
    return result
};


// console.log(transpose([[1,2,3],[4,5,6],[7,8,9]])) // [[1,4,7],[2,5,8],[3,6,9]]
console.log(transpose([[1,2,3],[4,5,6]])) // [[1,4],[2,5],[3,6]]
