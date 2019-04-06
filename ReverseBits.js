/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    
    let nAsArr = n.toString(2).split("");
        
    while(nAsArr.length < 32){
        nAsArr.splice(0, 0, "0");
    }
        
    let reverseNum = nAsArr.reverse();
    
    return parseInt(reverseNum.join(""), 2);
    
      
};