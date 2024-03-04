//learning how to use the simplest hashing function
//chaining by linkedlist to handle collisions
let ListNode = function(key, val, next){
    this.key = key
    this.val = val
    this.next = next
}

let MyHashMap = function() {
        this.size = 10001
        this.hashNum = 345456
        this.data = []

        this.hash = function (key) {
            return key * this.mult % this.size
        }

        this.put = function (key, val){
            //remove existing key first
            this.remove(key)
            let index = this.hash(key)
            //create new node at front of list
            let node = new ListNode(key, val, this.data[index])
            //set array index to point to new node
            this.data[index] = node
        }

        this.get = function (key){
            let index = this.hash(key)
            let node = this.data[index]

            //loop through linkedlist until key is found
            while(node){
                if(node.key === key)
                    return node.val
                node = node.next
            } 
            return -1
        }

        this.remove = function(key){
            let index = this.hash(key)
            node = this.data[index]
            if (!node) return
            //if key found, set array index to that node
            //javascript will auto clean that memory since it is no longer pointed to
            if (node.key === key)
                this.data[index] = node.next
            else {
                while(node){
                    if (node?.next?.key === key) {
                        node.next = node.next.next
                        return
                    }
                    node = node.next
                }
            }
        }
 };

 //https://leetcode.com/problems/design-hashmap