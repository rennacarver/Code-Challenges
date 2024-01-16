var number = function(busStops){
  let onBus = busStops[0][1]
  //console.log(busStops[0][1])
    
  for (k in busStops){
      //console.log(busStops[k])
      for (let j = 0; j<=1; j++) {
          console.log(busStops[k][j])
          if(j==0){
              console.log(`Adding ${busStops[k][j]} people`)
              onBus += busStops[k][j]
          } else if (j==1){
              onBus -= busStops[k][j]
              console.log(`Removing ${busStops[k][j]} people`)
          }
      }
  }
  return onBus;
}

https://www.codewars.com/kata/5648b12ce68d9daa6b000099/solutions/javascript