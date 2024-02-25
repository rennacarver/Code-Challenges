//https://leetcode.com/problems/valid-sudoku/

let isValidRow = function (board) {
    for (i in board) {
        let obj = {}
        for (j in board[i]){
            if (board[i][j] !== '.'){
                //if object already has that key value, there is a duplicate
                if (obj[board[i][j]]) return false
                obj[board[i][j]] = obj[board[i][j]] ? obj[board[i][j]] + 1 : 1 
            }
        }
        console.log(obj)
    }    
    return true    
}



//https://www.codewars.com/kata/551b4501ac0447318f0009cd/solutions/javascript

function booleanToString(b){
  return b ? "true" : "false"
}