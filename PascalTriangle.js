/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    let pTriangle = [];
    
    for(let i = 0; i < numRows; i++){
                
        if(i == 0){ pTriangle.push([1]); continue;}
        else if(i == 1){ pTriangle.push([1,1]); continue;}
        
        let tempArr = [];
        
        for(let j = 0; j < i + 1; j++){
            if(j == 0 || j == i){
                tempArr.push(1);
                continue;
            }
            
            let element = pTriangle[pTriangle.length - 1][j] + pTriangle[pTriangle.length - 1][j - 1];
            tempArr.push(element);
            
        }
        
        pTriangle.push(tempArr);
        
        
    }
    
    return pTriangle;
    
};