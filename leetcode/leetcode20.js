var isValid = function(s) {

    let stack = []
    const sArray = s.split('')
    const brackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    for(let i = 0; i<sArray.length; i++) {
        stack.push(sArray[i])
        

        if(stack.length > 1){
            if(brackets[stack[stack.length - 2]] === stack[stack.length - 1]) {
                stack.pop()
                stack.pop()
            }
                
        }
    }

    if (stack.length === 0) return true
    else return false
    
};