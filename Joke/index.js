const jokes = [
    "Why did the programmer quit his job? He didn't get arrays.",
    "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
    "Why do JavaScript developers wear glasses? Because they can't C#.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why did the developer go broke? He used up all his cache."
  ]

const randomjoke=jokes[Math.floor(Math.random()*jokes.length)];

let joke=document.querySelector(".joke").innerHTML=randomjoke;