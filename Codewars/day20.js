function accum(s) {
	let string = s.toLowerCase()
	let accStr = s.charAt(0) + '-'
	for (let i = 1; i<= string.length; i++){
	    accStr += string.charAt(i).toUpperCase()
	    for(let j = 0; j<i;j++){
    	    accStr += string.charAt(i)
    	    //if printing last repeat of letter and there is another letter to print, add a dash
    	    if(j === i-1 && string.charAt(i+1)){
    	        accStr += '-'
    	    }
	    }
	}
	return accStr
}

https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/solutions/javascript