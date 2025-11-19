
// // class Stack{
// //     constructor()
// //     {
// //         this.items=[];
// //     }
// //     push(element)
// //     {
// //         this.items.push(element);
// //     }
// //     pop()
// //     {
// //         if(this.isEmpty())
// //         {
// //             return "Stack is underflow"
// //         }
// //         return this.items.pop()
// //     }

// //     peek()
// //     {
// //         if(this.isEmpty())
// //         {
// // return "Stack is empty"
// //         }
// //         return this.items[this.items.length-1]
// //     }
// //     isEmpty()
// //     {
// //         return this.items.length===0;
// //     }

// //     display()
// //     {
// //         if(this.isEmpty())
// //         {
// //             console.log("Stack is empty");
// //            return; 
// //         }
// //         console.log("Stack elements from top to bottom");
// //         for(let i=this.items.length-1;i>=0;i--)
// //         {
// //             console.log(this.items[i]);
            
// //         }
        
// //     }
// // }
// // const stack=new Stack();
// // stack.push(10);
// // stack.push(20);
// // stack.push(30);
// // stack.display()

// class Node{
//     constructor(data)
//     {
//         this.data=data;
//         this.next=null;
//     }
// }
// class Stack{
//     constructor()
//     {
//         this.top=null;
//     }

//     push(data)
//     {
//         const newNode=new Node(data);
//         newNode.next=this.top;
//         this.top=newNode;
//     }

//         pop()
//         {
//             if(!this.top)
//                 return "Stack is underflow";
//             let popped=this.top.data;
//             this.top=this.top.next;
//             return popped;
//         }

//         peek()
//         {
//             if(!this.top) return "Stack is empty"
//             return this.top.data;
//         }
//         isEmpty()
//         {
//             return this.top===null;
//         }

//         display()
//         {
//             if(this.isEmpty())
//             {
//                 console.log("Stack is empty");
//                 return
                
//             }
//             let curr=this.top;
//             while(curr)
//             {
//                 console.log(curr.data);
//                 curr=curr.next
                
//             }
//         }
// }

// let stack=new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.display()
// stack.pop();
// console.log("After popping");

// stack.display()
// console.log("Peeked",stack.peek());



function reverseStr(str)
{
    let stack=[];
    for(let ch of str)
    {
        stack.push(ch)
    }
    let rev=""
    while(stack.length)
    {
        rev+=stack.pop()
    }
    return rev;

}

let str="hello";
console.log(reverseStr(str));
