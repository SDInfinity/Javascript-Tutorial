//N-Queens one solution 
function print(board) {
    for (let i = 0; i < board.length; i++) {
      console.log(board[i].join(' '));
    }
    console.log("\n");
  }


function isSafe(board,row,col){
    //straight attack
    for(let i=row-1;i>=0;i--)
    {
        if(board[i][col]=='Q')
        {
            return false;
        }
    }
    //left-diagonal attack
    for(let i=row-1,j=col-1;i>=0 && j>=0;i--,j--)
    {
        if(board[i][j]=='Q')
        {
            return false;
        }
    }
    //right diagonal attack
    for(let i=row-1,j=col+1;i>=0 && j<board.length;i--,j++)
    {
        if(board[i][j]=='Q')
        {
            return false;
        }
    }
    return true;
}


function n_queen(board,row)
{
    if(row==board.length)
    {
        return true;
    }else{
        for(let j=0;j<board.length;j++)
        {
            if(isSafe(board,row,j))
            {
                board[row][j]='Q';
                if(n_queen(board,row+1))
                {
                    return true;
                }
                
                board[row][j]='x';
            }
        }
    }
    return false;
}


let board = new Array(4).fill().map(() => new Array(4).fill('x'));

if(n_queen(board,0))
{
    print(board);
}else{
    console.log("No solution exists.");
}

