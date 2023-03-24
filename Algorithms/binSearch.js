let a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];                                //binary search works on sorted array

function findTarget(start,target,end)
{
    let middle=Math.floor((start+end)/2);
    
    if(a[middle]===target)
    {
        return true;
    }
    else if(a[middle]>target)                      
    {
        return findTarget(start,target,middle-1);
    }
    else{
        return findTarget(middle+1,target,end);
    }
}

if(findTarget(0,9,a.length))
{
    console.log("Element found")
}
else{
        console.log("Not found");
    }