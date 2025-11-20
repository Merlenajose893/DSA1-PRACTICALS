// // // // // // function squareAndReverse(arr)
// // // // // // {
// // // // // //     let res=[]
// // // // // //     for(let i=0;i<arr.length;i++)
// // // // // //     {
// // // // // //         res[i]=arr[i]*arr[i]
// // // // // //     }
// // // // // //     let rev=[]
// // // // // //     for(let i=res.length-1;i>=0;i--)
// // // // // //     {
// // // // // //         rev.push(res[i])
// // // // // //     }
// // // // // //     return rev
// // // // // // }

// // // // // // console.log(squareAndReverse([1,2,3]))

// // // // // // function replaceChar(str)
// // // // // // {
// // // // // //     let res=""
// // // // // //     for(let a of str)
// // // // // //     {
// // // // // //         res+=(a.charCodeAt(0)-96)
// // // // // //         if(a<str.length-1)
// // // // // //         {
// // // // // //             res+=" "
// // // // // //         }
// // // // // //     }
// // // // // //     return String(res);
// // // // // // }

// // // // // // console.log(replaceChar("hello"))

// // // // // // function secondLargestOdd(arr)
// // // // // // {
// // // // // //     let max=-Infinity,second=-Infinity;
    
// // // // // //     for(let a of arr)
// // // // // //     {
// // // // // //         if(a%2!==0)
// // // // // //         {
// // // // // //             if(a>max)
// // // // // //             {
// // // // // //                 second=max;
// // // // // //                 max=a;
// // // // // //             }
// // // // // //             else if(a>second && a!==max)
// // // // // //             {
// // // // // //                 second=a;
// // // // // //             }
// // // // // //         }
// // // // // //     }
    
// // // // // //     return second;
// // // // // // }


// // // // // // let arr=[10,11,12,13,14];
// // // // // // console.log(secondLargestOdd(arr))


// // // // // function isPrime(n)
// // // // // {
// // // // //     if(n<2)
// // // // //     {
// // // // //         return false;
        
// // // // //     }
    
// // // // //     for(let i=2;i*i<=n;i++)
// // // // //     {
// // // // //         if(n%i===0)
// // // // //         {
// // // // //             return false;
// // // // //         }
// // // // //     }
// // // // //     return true;
// // // // // }


// // // // // function SumofPrimes(arr)
// // // // // {
// // // // //     let sum=0;
// // // // //     for(let a of arr)
// // // // //     {
// // // // //         if(isPrime(a))
// // // // //         {
// // // // //             sum+=a
// // // // //         }
// // // // //     }
// // // // //     return sum
// // // // // }

// // // // // console.log(SumofPrimes([1,2,3,4,5,6,7]))


// // // // // function thirdLargest(arr)
// // // // // {
// // // // //     let first=-Infinity,second=-Infinity,third=-Infinity;
    
// // // // //     for(let a of arr)
// // // // //     {
// // // // //         if(a>first)
// // // // //         {
// // // // //             third=second;
// // // // //             second=first;
// // // // //             first=a;
// // // // //         }
// // // // //         else if(a>second && a!==first)
// // // // //         {
// // // // //             third=second;
// // // // //             second=a;
// // // // //         }
        
// // // // //         else if(a>third && a!==second)
// // // // //         {
// // // // //             third=a;
// // // // //         }
// // // // //     }
    
// // // // //     return third;
// // // // // }

// // // // // let arr=[10,20,30,40,50];
// // // // // console.log(thirdLargest(arr))

// // // // function commonElements(arr1,arr2)
// // // // {
// // // //     let res=[];
// // // //     for(let i=0;i<arr1.length;i++)
// // // //     {
// // // //         for(let j=0;j<arr2.length;j++)
// // // //         {
// // // //             if(arr1[i]===arr2[j])
// // // //             res.push(arr1[i])
// // // //         }
// // // //     }
// // // //     return res;
// // // // }


// // // // console.log(commonElements([1,2,3],[2,3,4]))


// // // function frequency(arr)
// // // {
// // //     let freq={};
// // //     for(let a of arr)
// // //     {
// // //         freq[a]=(freq[a]||0)+1
// // //     }
// // //     return freq;
// // // }

// // // console.log(frequency([1,2,3,4,2,2]));


// // // function avgEven(arr)
// // // {
// // //     let sum=0,count=0, avg=0;
// // //     for(let a of arr)
// // //     {
// // //         if(a%2===0)
// // //         {
// // //             sum+=a;
// // //             count++;
// // //         }
// // //     }
// // //     avg+=sum/count;
// // //     return avg
// // // }

// // // console.log(avgEven([1,2,3,4,5,6,7,8,9,10]));



// // function sumPairs(arr, target) {
// //     let res = [];
// //     for (let i = 0; i < arr.length; i++) {
// //         for (let j = i + 1; j < arr.length; j++) { // j starts at i+1
// //             if (arr[i] + arr[j] === target) {
// //                 res.push([arr[i], arr[j]]);
// //             }
// //         }
// //     }
// //     return res;
// // }


// // let arr = [1, 2, 3, 4, 3];
// // let target = 4;
// // console.log(sumPairs(arr, target));



// function removeSmallest(arr)
// {
//     let min=Infinity;
//     let index=0;
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]<min)
//         {
//             min=arr[i]
//             index=i;
//         }
//     }
//     for(let i=index;i<arr.length-1;i++)
//     {
//         arr[i]=arr[i+1];

//     }
//     arr.length--;
//     return arr;
    

    
// }

// console.log(removeSmallest([23,21,56,87]));

