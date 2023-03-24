//Searching in a rotated sorted input array.

function search(array,target,si,ei){

    let mid=Math.floor((si+ei)/2);
    //base case
    if(array[mid]==target)
    {
        return mid;
    }
    if(si==ei)
    {
        return si;
    }
    //mid lies on line 1.
    else if(array[mid]>=array[si]){
        //when target lies on left of mid:
        if(array[si]<=target  && target<=array[mid])
        {
            return search(array,target,si,mid);
        }else{
            return search(array,target,mid,ei);
        }
    }
    //mid lies on line 2.
    else{
        //target lies on right of mid:
        if(array[mid]<=target && target<=array[ei])
        {
            return search(array,target,mid,ei);
        }else{
            return search(array,target,si,mid);
        }
    }
    
}

let array=[4,5,6,7,0,1,2];
console.log("The element is present at index "+search(array,0,0,array.length-1)+".");