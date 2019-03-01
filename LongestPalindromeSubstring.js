/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    let substr = "";
    let maxLength = -Infinity;
    let maxStr = "";
    
    for(let i = 0; i < s.length; i++){
        
        substr = "";
                
        for(let j = i; j < s.length; j++){
            substr += s[j];
            
            if(substr == substr.split("").reverse().join("")){
                if(substr.length > maxLength){
                    maxLength = substr.length;
                    maxStr = substr;
                }
            }
        }
        
        
    }
    
    return maxStr;
    
    
};