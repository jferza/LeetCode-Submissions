/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let ss = "";
    let sl = 0;
    let curMax = 0;
    let count = 0;
    
    if(s.length == 1) return 1;
    
    for(let i = 0; i < s.length; i++){
        
        if(!ss.includes(s[i])){
            sl++;
            ss += s[i];
        }
        else{
            if(sl > curMax){
                curMax = sl;
            }
            sl = 0;
            ss = "";
            i = count;
            count++;
        }
        
    }
    if(sl > curMax) curMax = sl;
    return curMax;
    
};