/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const origNums = [];
    for(let j = 0; j < nums.length; j++){
        origNums.push(nums[j]);
    }
    
    for(let i = 0; i < origNums.length; i++){
        nums = [];
        for(let j = 0; j < origNums.length; j++){
            nums.push(origNums[j]);
        }
        let tempNums = nums.splice(i, 1);
        
        if(nums.indexOf(origNums[i]) < 0){
            return origNums[i];
        }
    }
    return 0;
};