function createPhoneNumber(numbers){
    return '(' + numbers.slice(0, 3).join('') + ') ' + numbers.slice(3, 6).join('') + '-' + numbers.slice(-4).join('')
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// returns "(123) 456-7890"