function isAnagram(s, t) {
  if (s.length !== t.length) return false

  let hashmap1 = {}
  let hashmap2 = {}

  for (let k in s) {
    if (hashmap1[s[k]]) {
      hashmap1[s[k]] += 1
    } else hashmap1[s[k]] = 1

    if (hashmap2[t[k]]) {
      hashmap2[t[k]] += 1
    } else hashmap2[t[k]] = 1
  }

  for (const property in hashmap1) {
    //console.log(`${property}: ${hashmap1[property]}`)
    if (hashmap1[property] !== hashmap2[property]) return false
  }

  return true
}

console.log(isAnagram('torral', 'attack'))
console.log(isAnagram('torral', 'lorrat'))

//  https://neetcode.io/problems/is-anagram
