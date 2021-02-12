/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    let previous = null;
    while(head) {
        let temp = head;
        head = head.next;
        temp.next = previous;
        previous = temp;
    }
    return previous;

};