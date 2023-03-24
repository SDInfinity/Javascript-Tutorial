//Grid-Ways
function ways(m,n,x,y)
{
    //base case
    if(x==m-1 && y==n-1)
    {
        return 1;
    }else if(x==m | y==n )
    {
        return 0;
    }
    else{
        return ways(m,n,x+1,y) + ways(m,n,x,y+1);
    }
}

console.log("The number of ways "+ways(3,3,0,0)+".");

