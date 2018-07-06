// 7 kyu - Is every value in the array an array?
// Is every value in the array an array?
//
// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.
//
// Examples:
//
// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false


const arrCheck = value => {
  return value.every(x => Array.isArray(x))
}


let answer = arrCheck(['A', 'R', 'R', 'A', 'Y'])
console.log(answer)
