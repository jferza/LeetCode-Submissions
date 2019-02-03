/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var rev = Math.sign(x) * Number(Math.abs(x).toString().split('').reverse().join(''));
    if(rev < -1*Math.pow(2, 31) || rev > Math.pow(2, 31) - 1){
        return 0;
    }
    return rev;
    
};