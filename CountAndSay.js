/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    
    let curString = "1";
    let newString = "";
    let seqCount = 0;
    let curChar = "1";
    
    if(n == 1) return curString;
    
    for(let i = 1; i < n; i++){
        
        if(i != 1){
            curString = newString;
            newString = "";
        }
        
        seqCount = 1;
        
        for(let j = 0; j < curString.length; j++){
            
            curChar = curString[j];
            
            if(curString[j] == curString[j + 1]){
                seqCount++;
            }
            else{
                newString += (seqCount + curChar); 
                seqCount = 1;
            }
        }
    }
    
    return newString;
};