/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let countsObj = {};
    let counts = [];
    let maxKeyname = "";
    let max = 0;
    
    
    for(let i = 0; i < nums.length; i++){
        keyName = nums[i];
        
        if(!(keyName in countsObj)){
            countsObj[keyName] = 1;
            
            
        }
        else{
            countsObj[keyName] += 1;
            //if(countsObj[keyName] > (nums.length / 2)){
           //     return keyName;
           // }
        }
        
        if(countsObj[keyName] > max){
                max = countsObj[keyName];
                maxKeyname = keyName;
        }
           
    }
    
    return maxKeyname;
    
};