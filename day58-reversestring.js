//method 1

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    return s.reverse()
};

//method 2

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let l = s.length
    for (let i = 0; i < l - 1 - i; i++) {
        let temp = s[i]
        s[i] = s[l-1-i]
        s[l-1-i] = temp
    }
};

//https://leetcode.com/problems/reverse-string/