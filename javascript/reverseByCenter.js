// 6 kyu - Do you speak retsec?
// Do you speak retsec?
// You and your friends want to play undercover agents. In order to exchange your secret messages,
// you've come up with the following system: you take the word, cut it in half, and place the first half behind the latter. If the word has an uneven number of characters, you leave the middle at its previous place:
//
// That way, you'll be able to exchange your messages in private.
//
// Task
// You're given a single word. Your task is to swap the halves. If the word has an uneven length, leave the character in the middle at that position and swap the chunks around it.
//
// Examples
// reverseByCenter("agent") == "nteag" // center character is e
//
// reverseByCenter("secret")  == "retsec" // no center character

function reverseByCenter(s){
  if (s.length % 2 === 0) {
    return s.slice(s.length/2) + s.slice(0,s.length/2)
  } else {
    return s.slice(s.length/2 + 1) + s.charAt((s.length) /2) + s.slice(0,s.length/2)
  }
}

// alternative solution:
// function reverseByCenter(s) {
//   var n = s.length / 2
//   return s.slice(Math.ceil(n)) + s.slice(Math.floor(n), Math.ceil(n)) + s.slice(0, Math.floor(n))
// }
