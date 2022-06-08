

class LinkedList{
    constructor(head = null){
        this.head = head;
    }
}

let node1 = new LinkedList(2);
let node2 = new LinkedList(3);
node1.next = node2
let list = new LinkedList(node1)
console.log(list.head.next.head)