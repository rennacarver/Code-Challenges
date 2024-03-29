function getMiddle(s)
{
  let length = s.length
  if (length % 2 === 0) {
    return s.charAt((length / 2)-1) + s.charAt(length / 2)
  } else {
    return s.charAt(Math.floor(length / 2))
  }
}

//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript