/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let wordArray = s.split(" ");
        
    while(wordArray.indexOf("") >= 0){
        wordArray.splice(wordArray.indexOf(""), 1);
    }
    
    if(wordArray.length > 0) return wordArray[wordArray.length - 1].length;
    return 0;
};