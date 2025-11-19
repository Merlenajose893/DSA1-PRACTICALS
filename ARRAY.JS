// // function squareAndReverse(arr)
// // {
// //     let res=[]
// //     for(let i=0;i<arr.length;i++)
// //     {
// //         res[i]=arr[i]*arr[i]
// //     }
// //     let rev=[]
// //     for(let i=res.length-1;i>=0;i--)
// //     {
// //         rev.push(res[i])
// //     }
// //     return rev
// // }

// // console.log(squareAndReverse([1,2,3]))

// // function replaceChar(str)
// // {
// //     let res=""
// //     for(let a of str)
// //     {
// //         res+=(a.charCodeAt(0)-96)
// //         if(a<str.length-1)
// //         {
// //             res+=" "
// //         }
// //     }
// //     return String(res);
// // }

// // console.log(replaceChar("hello"))

// // function secondLargestOdd(arr)
// // {
// //     let max=-Infinity,second=-Infinity;
    
// //     for(let a of arr)
// //     {
// //         if(a%2!==0)
// //         {
// //             if(a>max)
// //             {
// //                 second=max;
// //                 max=a;
// //             }
// //             else if(a>second && a!==max)
// //             {
// //                 second=a;
// //             }
// //         }
// //     }
    
// //     return second;
// // }


// // let arr=[10,11,12,13,14];
// // console.log(secondLargestOdd(arr))


// function isPrime(n)
// {
//     if(n<2)
//     {
//         return false;
        
//     }
    
//     for(let i=2;i*i<=n;i++)
//     {
//         if(n%i===0)
//         {
//             return false;
//         }
//     }
//     return true;
// }


// function SumofPrimes(arr)
// {
//     let sum=0;
//     for(let a of arr)
//     {
//         if(isPrime(a))
//         {
//             sum+=a
//         }
//     }
//     return sum
// }

// console.log(SumofPrimes([1,2,3,4,5,6,7]))


function thirdLargest(arr)
{
    let first=-Infinity,second=-Infinity,third=-Infinity;
    
    for(let a of arr)
    {
        if(a>first)
        {
            third=second;
            second=first;
            first=a;
        }
        else if(a>second && a!==first)
        {
            third=second;
            second=a;
        }
        
        else if(a>third && a!==second)
        {
            third=a;
        }
    }
    
    return third;
}

let arr=[10,20,30,40,50];
console.log(thirdLargest(arr))