var fib = function(n) {
    const f_0 = 0
    const f_1 = 1
    let fibArray = [0,1]

    if (n === 0) return 0
    if (n === 1) return 1

    for (let count = 2; count <= n; count++){
        fibArray.push(fibArray[count-2] + fibArray[count-1])
    }

    console.log(fibArray)

    return fibArray[n]
};

https://leetcode.com/problems/fibonacci-number/