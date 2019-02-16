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
var addTwoNumbers = function(l1, l2) {
    
    let ln = new ListNode(0);
    let p = l1;
    let q = l2;
    let curNode = ln;
    let carry = 0;
    
    while(p != null || q != null){
        let x = (p != null) ? p.val : 0;
        let y = (q != null) ? q.val : 0;
        let sum = carry + x + y;
        carry = (sum > 9) ? 1 : 0;
        curNode.next = new ListNode(sum % 10);
        curNode = curNode.next;
        if(p != null) p = p.next;
        if(q != null) q = q.next;
    }
    if(carry > 0){
        curNode.next = new ListNode(carry);
    }
    
    return ln.next;
    
    
};