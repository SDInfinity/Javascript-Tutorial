//run in browser

let char=['S','W','G'];
let random=char[Math.floor(Math.random()*char.length)];

let n=1;
alert(random);
while(n<=10)
{
    let choice=prompt(" Enter your choice :");
    if(choice==random)
    {
    alert("It's a tie");
    }
    else if(choice=='S' && random=='W'){
    alert("You Win !!!");
        break;
    }
    else if(choice=='S' && random=='G')
    {
    alert("You lose")
    }
    else if(choice=='G' && random=='S'){
        alert("You Win")
        break;
    }
    else if(choice=='G' && random=='W'){
        alert("You Lose");
    }
    else if(choice=='W' && random=='S')
    {
        alert("You Lose");
    }
    else{
        alert("You Win");
        break;
    }
    n++;
}

let score=10-n;
alert("Score "+score);




