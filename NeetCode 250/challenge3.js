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
  console.log(hashmap1)
  console.log(hashmap2)
}

isAnagram('torral', 'attack')

//  https://neetcode.io/problems/is-anagram
