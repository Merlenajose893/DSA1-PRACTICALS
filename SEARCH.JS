//LINEAR SEARCH

// function LinearSearch(arr,target)
// {
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]===target)
//         {
//             return i
//         }
//     }
//     return -1;
// }

// const arr=[1,2,3,4,5];
// const target=3;
// console.log(LinearSearch(arr,target));

//BINARY SEARCH

// function binarySearch(arr,target)
// {
//     let low=0;
//     let high=arr.length-1;
//     while(low<=high)
//     {
//         let mid=Math.floor((low+high)/2);
//         if(arr[mid]===target) return mid;
//         else if(target<arr[mid]) high=mid-1;
//         else low=mid+1
//     }
//     return -1;
// }


// console.log(binarySearch([10,20,30,40],30));

//✅ 3. Binary Search + Replace Target with 0

// function binarySearchReplace(arr,target)
// {
//     let low=0,high=arr.length-1;
//     while(low<=high)
//     {
//         let mid=Math.floor((low+high)/2);
//         if(arr[mid]===target)
//         {
//             arr[mid]=0;
//             return arr;
//         }
//         else if(arr[mid]<target) low=mid+1;
//         else high=mid-1;

//     }
//     return arr
// }
// console.log(binarySearchReplace([1,2,3,4,5],3));
//✅ 4. Binary Search on Array of Strings

// function binarySearchString(arr,target)
// {
//     let low=0,high=arr.length-1;
//     while(low<=high)
//     {
//         let mid=Math.floor((low+high)/2);

//         if(arr[mid]===target)
//             return mid;
//         else if(arr[mid]<target)
//             low=mid+1;
//         else
//             high=mid-1;
//     }
//     return -1;
// }


// console.log(binarySearchString(["apple","banana","mango"],"banana"));

// ✅ 5. Find Last Occurrence in Sorted Array

// function lastOccurence(arr,target)
// {
//     let low=0,high=arr.length-1;
//     let res=-1;
//     while(low<=high)
//     {
//         let mid=Math.floor((low+high)/2);
//         if(arr[mid]===target)
//         {
//             res=mid;
//             low=mid+1;
//         }
//         else if(arr[mid]<target) 
//         {
//             low=mid+1;
//         }
//         else high=mid-1;
//     }
//     return res;
// }

// console.log(lastOccurence([2,3,3,3,4],3));




function binarySearchRecursive(arr,target,low=0,high=arr.length-1)
{
    if(low>high) return -1;
    let mid=Math.floor((low+high)/2);
    if(arr[mid]===target)
    {
        return mid;
    }
    if(arr[mid]<target)
    {
        return binarySearchRecursive(arr,target,mid+1,high)
    }
    return binarySearchRecursive(arr,target,low,mid-1)

}
console.log(binarySearchRecursive([2,4,6,8,10],6));
