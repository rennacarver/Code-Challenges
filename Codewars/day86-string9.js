function abbrevName(name){
    let array = name.split(' ')
    return array[0].charAt(0).toUpperCase() + '.' + array[1].charAt(0).toUpperCase()
}

//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript