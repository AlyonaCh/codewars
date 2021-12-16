// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

snail = function(array) {
    let n = array[0].length
    let arrayNew = []
    let forTL = 0
    let forRB = n - 1
    while (arrayNew.length != Math.pow(n, 2)) {
        if (forRB == forTL) {
            arrayNew.push(array[forRB][forTL])
        }else{
            for (let t = forTL; t < forRB; t++) {
                arrayNew.push(array[forTL][t])
            }
            for (let r = forTL; r < forRB; r++) {
                arrayNew.push(array[r][forRB]) 
            }
            for (let b = forRB; b > forTL; b--) {
                arrayNew.push(array[forRB][b]) 
            }
            for (let l = forRB; l > forTL; l--) {
                arrayNew.push(array[l][forTL])
            }
        }
        forTL++
        forRB--
    }
    return arrayNew
}
    
console.log(snail([
    [01, 02, 03,04,05,06,07],
    [11, 12, 13,14,15,16,17],
    [21, 22, 23,24,25,26,27],
    [31, 32, 33,34,35,36,37],
    [41, 42, 43,44,45,46,47],
    [51, 52, 53,54,55,56,57],
    [61, 62, 63,64,65,66,67],
]));
console.log(snail([
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
]));
console.log(snail([
    [1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]
]));
console.log(snail([
    [1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]
]));

