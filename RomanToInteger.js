/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    var romChar;
    var total = 0;
    
    for(var i = 0; i < s.length; i++){
        
        romChar = s.charAt(i);
        
        switch(romChar){
            case "I":
                total += checkAndReturnSubtraction();
                break;
            case "V":
                total += 5;
                break;
            case "X":
                total += checkAndReturnSubtraction();
                break;
            case "L":
                total += 50;
                break;
            case "C":
                total += checkAndReturnSubtraction();
                break;
            case "D":
                total += 500;
                break;
            case "M":
                total += 1000;
                break;
            default:
                console.log("undefined symbol");
                break;
            
        }
    }
    
    function checkAndReturnSubtraction(){
        if(romChar == "I"){
            if(s.charAt(i + 1) == "V"){
                i++;
                return 4;
            }
            else if(s.charAt(i + 1) == "X"){
                i++;
                return 9;
            }
            else{
                return 1;
            }
        }
        else if(romChar == "X"){
            if(s.charAt(i + 1) == "L"){
                i++;
                return 40;
            }
            else if(s.charAt(i + 1) == "C"){
                i++;
                return 90;
            }
            else{
                return 10;
            }
                
        }
        else if(romChar == "C"){
            if(s.charAt(i + 1) == "D"){
                i++;
                return 400;
            }
            else if(s.charAt(i + 1) == "M"){
                i++;
                return 900;
            }
            else{
                return 100;
            }   
        }
    }
    
    
    console.log("Int value: " + total);
    return total;
    
};