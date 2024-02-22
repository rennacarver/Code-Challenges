let MyHashMap = function() {
    this.data = []
    //console.log(this.data)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.data[key] = value
    //console.log(this.data)
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    //console.log(this.data[key])
    return this.data[key] ? this.data[key] : -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    this.data[key] = -1
};

//https://leetcode.com/problems/design-hashmap/