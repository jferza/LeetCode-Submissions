/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(Math.sign(x) < 0) return false;
    
    var rev = Number(x.toString().split('').reverse().join(''));
    if(x == rev){
        return true;
    }
    else{
        return false;
    }
    
};