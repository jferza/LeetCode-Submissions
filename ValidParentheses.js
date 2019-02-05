/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    var parens = {'(':')', '{':'}', '[':']' };
    var sequence = "";

    
    if(s.length % 2 != 0) return false;
    
    for(var i = 0; i < s.length; i++){
        
        if(!(s.charAt(i) in parens)){
           if(parens[sequence.slice(-1)] != s.charAt(i)){
                return false;   
           }
           else{
               sequence = sequence.slice(0, -1);
           }   
        }
        else{
            sequence += s.charAt(i);
        }
        
    }
    if(sequence != ""){
        return false;
    }
    return true;
    
    
};