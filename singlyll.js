// class Node{
//     constructor(data)
//     {
//         this.data=data;
//         this.next=null;
//     }
// }


// class Sll{
//     constructor()
//     {
//         this.head=null;
//     }

//     insertAtBeginning(data)
//     {
//         const newNode=new Node(data);
//         newNode.next=this.head;
//         this.head=newNode;
//     }

//     insertAtEnd(data)
//     {
//         const newNode=new Node(data);
//         if(!this.head)
//         {
//             this.head=newNode;
//             return;
//         }

//         let temp=this.head;
//         while(temp.next)
//         {
//             temp=temp.next
//         }
//         temp.next=newNode;
//     }

//     insertAtSpeciofic(data,pos)
//     {
//         const newNode=new Node(data);
//         if(pos===1)
//         {
//             newNode.next=this.head;
//             this.head=newNode;
//             return;
//         }
//         let temp=this.head;
//         for(let i=1;i<pos-1 &&temp!==null;i++)
//         {
//             temp=temp.next
//         }
//         newNode.next=temp.next;
//         temp.next=newNode;
//     }
//     deleteFront()
//     {
//         if(!this.head)
//         {
//             console.log("List is empty");
//             return;
            
//         }
//         this.head=this.head.next;
//     }
//     deleteBack()
//     {
//         if(!this.head)
//         {
//             console.log("List is empty");
//             return;
            
//         }
//         if(this.head.next)
//         {
//             this.head=null;
//             return;
//         }
//         let temp=this.head;
//         while(temp.next.next)
//         {
//             temp=temp.next;
//         }
//         temp.next=null;
//     }
//     deleteAtPos(pos)
//     {
//         if(!this.head) return;
//         if(pos===1)
//         {
//             this.head=this.head.next;
//             return;
//         }
//         for(let i=1;i<pos-1&&temp;i++)
//         {
//             temp=temp.next;
//         }
//         if(!temp ||temp.next) return;
//         temp.next=temp.next.next;
//     }
//     display()
//     {
//         let temp=this.head;
//         let res=""
//         while(temp)
//         {
//             res+=temp.data+" ";
//             temp=temp.next;
//         }
//         console.log(res);
        
//     }
// }

// let ll=new Sll();
// ll.insertAtBeginning(10);
// ll.insertAtEnd(20)
// ll.insertAtEnd(30)
// ll.insertAtEnd(40)
// ll.insertAtSpeciofic(23,4)
// ll.deleteFront()
// ll.deleteBack()
// ll.deleteAtPos(2)
// ll.display()

class DoublyNode{
constructor(data)
{
    this.data=data;
    this.next=null;
    this.prev=null;
}
}


class dll{
    constructor()
    {
        this.head=null;
        this.tail=null;
    }

    insertAt()
    {
        const newNode=new DoublyNode();
        if(this.head)
        {
            this.tail=newNode;
            this.head=newNode;
            return;
        }
        this.tail.next=newNode;
        newNode.prev=this.tail;
        this.tail=newNode;
    }
    deleteFront()
    {
        if(!this.head) return;
        if(this.head===this.tail)
        {
            this.head=null;
            this.tail=null;
            return;
        }
        this.head=this.head.next;
        this.head.prev=null;
    }
    deleteBack()
    {
        if(this.tail) return;
        if(this.head===this.tail)
        {
            this.head=null;
            this.tail=null;
            return;
        }
        this.tail=this.tail.prev;
        this.tail.next=null;
    }
}