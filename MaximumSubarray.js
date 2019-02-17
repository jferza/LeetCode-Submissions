/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let curMax = -Infinity;
    let curSum = 0;
   
    for(let i = 0; i < nums.length; i++){
        curSum = 0;
        for(let j = i; j < nums.length; j++){
            
            curSum += nums[j];
            if(curSum > curMax){
                curMax = curSum;
            }
            
        }
                
    }
    
    return curMax;
    
};