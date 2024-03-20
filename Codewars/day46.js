function bouncingBall(h,  bounce,  window) {
  if (h <= 0) return -1
  if (bounce <= 0 || bounce >= 1) return -1
  if (window >= h) return -1
  let motherHeight = window
  let ballHeight = h
  
  let passes = 0
  
  //decrease ball height by bounce each loop, increase by one pass
  while (ballHeight > motherHeight){
     //if the ball rebounds higher than mother's window, add two passes
     if(ballHeight * bounce > motherHeight){
          passes += 2
     //otherwise add 1 pass
     } else {
          passes += 1
     }
     ballHeight *= bounce
  }

  return passes
}

//https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript