/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    
    var commonPrefix = '';
    var letter;
    
    
    if(strs[0]){
        for(var j = 0; j < strs[0].length; j++){
            letter = strs[0].charAt(j);
            for(var i = 0; i < strs.length; i++){
                if(strs[i].charAt(j) != letter){
                    return commonPrefix;
                }

                if(i == strs.length - 1){
                    commonPrefix += letter;
                }


            }
        }
    }
    return commonPrefix;
    
};