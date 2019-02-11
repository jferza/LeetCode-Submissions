/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    var arrayOfVals = [];
    var isNull = false;
    
    var currentNode = l1;
    var currentNode2 = l2;
    var outNode;
    
    if(l1 == null && l2 == null){
        return null;
    }
    
    
    while(!isNull){
        if(currentNode != null){
            arrayOfVals.push(currentNode.val);
        }
        if(currentNode2 != null){
            arrayOfVals.push(currentNode2.val);
        }
        if(currentNode == null && currentNode2 == null){
            isNull = true;
        }
        if(currentNode != null){
            currentNode = currentNode.next;
        }
        if(currentNode2 != null){
            currentNode2 = currentNode2.next;
        }
        
    }
    
    arrayOfVals.sort(function(a, b){return a-b});
        
    outNode = new ListNode(arrayOfVals[0]);
    currentNode = outNode;
    
    for(i = 1; i < arrayOfVals.length; i++){
        currentNode.next = new ListNode(arrayOfVals[i]);
        currentNode = currentNode.next;
    }
    
    return outNode;
    
};