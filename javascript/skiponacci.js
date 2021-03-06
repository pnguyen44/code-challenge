// 7 kyu - The Skiponacci Sequence
// Your task is to generate the Fibonacci sequence to n places, with each alternating value as "skip". For example:
//
// "1 skip 2 skip 5 skip 13 skip 34"

function skiponacci(n) {
  if (n === 1) return '1'
  let fib = [1,1]
  for (let i = 0; i < n - 2; i++) {
    fib.push(fib[i] + fib[i+1])
  }
  return fib.map((c,i) => (i+1) % 2 === 0 ? 'skip' : c).join(' ')
}

// Alternative Solution:
// function skiponacci(n) {
//   let arr = [], i = 1;
//   for (i; i <= n; i++)
//     arr.push(getFib(i));
//   return arr.map((e,i) => i % 2 == 0 ? `${e}` : 'skip').join(' ');
// }
//
// const getFib = (n) => { return n == 1 || n == 2 ? 1 : getFib(n - 2) + getFib(n - 1) }
