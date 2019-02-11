/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    var repeatCount = 0;
    var initIndex = 0;
    
    for(var i = 0; i < nums.length; i++){
        if(nums[i] == nums[i + 1]){
            repeatCount++;
        }
        if(nums[i] != nums[i + 1]){
            nums.splice(initIndex, repeatCount);
            repeatCount = 0;
            initIndex++;
            i = initIndex - 1;
        }
    }
    
    return nums.length;
};