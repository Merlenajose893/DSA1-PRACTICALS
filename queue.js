// class Queue{
//     constructor()
//     {
//         this.items=[];
//     }
//     enqueue(element)
//     {
//         this.items.push(element);
//     }

//     dequeue()
//     {
//         if(this.isEmpty()) return "Queue underflow";
//         return this.items.shift()
//     }
//     front()
//     {
//         if(this.isEmpty())
//         {
//             return "Queue is empty"
//         }
//         return this.items[0]
//     }
//     isEmpty()
//     {
//         return this.items.length===0
//     }
//     display()
//     {
//         console.log("Queue elements",this.items.join('->'));
        
//     }
// }

// let q=new Queue();
// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);
// q.display()
// q.dequeue()
// q.display()
// console.log(q.front());
// q.dequeue();
// q.display()
// q.dequeue();
// q.display()




class Node{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}

class Queue{
    constructor()
    {
        this.front=null;
        this.rear=null;
    }
    enqueue(data)
    {
        const newNode=new Node(data);
        if(!this.front) this.front=this.rear=newNode;
        else{
            this.rear.next=newNode;
            this.rear=newNode
        }

    }
    dequeue()
    {
        if(!this.front) return "Queue underflow";
        const value=this.front.data;
        this.front=this.front.next;
        if(!this.front)
            this.rear=null;
        return value;
    }
    front()
    {
        return this.front?this.front.data:"Queue is empty"
    }

    isEmpty()
    {
        return this.front===null;
    }

    display()
    {
        if(this.isEmpty())
        {
            console.log("Queue is empty");
            
        }
        let curr=this.front;
        let res="";
        while(curr)
        {
            res+=curr.data+"->";
            curr=curr.next;
        }
        console.log(res);
        
    }
}

const q=new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40)
q.display()