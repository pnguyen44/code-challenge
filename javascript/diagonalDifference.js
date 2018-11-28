
// Diagonal Difference

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
//
// For example, the square matrix arr is shown below:
//
// 1 2 3
// 4 5 6
// 9 8 9
//
// The left-to-right diagonal 1 + 5 + 9 = 15. The right to left diagonal 3 + 5 + 9 = 17. Their absolute difference is | 15 - 17| = 2
//
// Complete the diagonalDifference  function in the editor below. It must return an integer representing the absolute diagonal difference.
//
// diagonalDifference takes the following parameter:
//
// arr: an array of integers .

function diagonalDifference(arr) {
    const x = []
    let xSum = 0
    const y = []
    let ySum = 0
    // let counter = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        x.push(arr[i][i])
        y.push(arr[i][arr.length - 1 - i])
        // counter -= 1
    }

    xSum = x.reduce(function (prev, curr) {
        return prev + curr
    })
    ySum = y.reduce(function (prev, curr) {
        return prev + curr
    })

    return Math.abs(xSum - ySum)
}


console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])) // 15
