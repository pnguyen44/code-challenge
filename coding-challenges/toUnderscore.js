// 5 kyu - Convert PascalCase string into snake_case
// Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If method gets number, it should return string.
//
// Examples:
//
// //  returns test_controller
// toUnderscore('TestController');
//
// // returns movies_and_books
// toUnderscore('MoviesAndBooks');
//
// // returns app7_test
// toUnderscore('App7Test');
//
// // returns "1"
// toUnderscore(1);

function toUnderscore(string) {
  return string.toString().replace(/[A-Z]/g, (c,i) => (i !== 0 ?  '_' : '') + c.toLowerCase())
}

// alternative solution:
// function toUnderscore(string) {
//   return string.toString().split(/(?=[A-Z])/).join('_').toLowerCase();
// }

// function toUnderscore(string) {
//   return (''+string).replace(/(.)([A-Z])/g, '$1_$2').toLowerCase();
// }
