/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    let sum = "";
    let carry = false;
    
    let numZeros = Math.abs(a.length - b.length);
    
    
    
    for(let i = 0; i < numZeros; i++){
        if(a.length < b.length){
            a = "0" + a;
        } else {
            b = "0" + b;
        }
    }
    
    
    for(let j = a.length - 1; j >= 0; j--){
        
        if(Number(a[j]) + Number(b[j]) > 1){
                        
            if(carry){
                sum = "1" + sum;
            }
            else{
                sum = "0" + sum;
            }
            carry = true;
        }
        else{
            
            let miniSum = Number(a[j]) + Number(b[j]);
            if(carry){
                
                miniSum++;
               
                if(miniSum > 1){
                    miniSum = 0;
                    //carry remains true
                }
                else{
                    carry = false;
                }
            }
            sum = miniSum.toString() + sum;
        }
        if(j == 0 && carry){
            sum = "1" + sum;
        }
    }
    
    
    return sum;
    
};
