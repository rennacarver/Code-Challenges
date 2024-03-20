function isValidWalk(walk) {
  if(walk.length !== 10) return false
  
  let h_pos = 0
  let v_pos = 0
  
  for(let i = 0; i<=walk.length; i++){
    if(walk[i]==='n') v_pos += 1
    if(walk[i]==='s') v_pos -= 1
    if(walk[i]==='e') h_pos += 1
    if(walk[i]==='w') h_pos -= 1
  }
  
  if(h_pos === 0 && v_pos === 0) return true
  else return false
  
}

//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript