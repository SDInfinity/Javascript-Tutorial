
let input = document.querySelector(".length");
const digits = "0123456789";
class  Password{
    constructor(password)
    {
        this._password=password;
    }

    get password()
    {
        return this._password;
    }

    set password(password)
    {
        this._password=password;
    }

    static setPassword(userLength) {
        let password = "";
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const specialChars = "!@#$%^&*()_+{}:\"<>?\|[];',./`~";
        ;
      
        const requiredChars = [
          lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length)),
          uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length)),
          specialChars.charAt(Math.floor(Math.random() * specialChars.length)),
          digits.charAt(Math.floor(Math.random()* digits.length))
        ];
      
        password = requiredChars.join("");
      
        // Set the length of the password based on the length of the name parameter
        let length =  userLength - requiredChars.length;
      
        //to add the remaining characters to the password.
        let remainingChars = lowercaseChars + uppercaseChars + specialChars;
      
        for (let i = 0; i < length; i++) {
          password += remainingChars.charAt(Math.floor(Math.random() * remainingChars.length));
        }
      
        return password;
      }
      
     
    static funnyPassword(){

        let password="";

        const funnyWords = ["Bamboozle", "Brouhaha", "Codswallop", "Gobbledygook", "Hocus-pocus", "Kerfuffle", "Lollygag", "Malarkey", "Nincompoop", "Piffle", "Poppycock", "Scootch", "Shenanigans", "Skedaddle", "Snickersnee","password","poo-poo","fart"];
        
    
        password += (funnyWords[Math.floor(Math.random()*funnyWords.length)]);
    
    
        return password;
    }

}


let user = new Password("");





// console.log(user.password);




let btn = document.querySelector(".btn");
let funny_btn = document.querySelector(".funny");

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let l= input.value;
    if(l.trim()!='' && /\d/.test(l) && parseInt(l)>4)
    {
        user.password = Password.setPassword(parseInt(l));
        console.log(user.password);
        let message = document.createElement('p');
        message.innerHTML+=`Your generated password is : ${user.password}`;
        let existingMessage = document.querySelector('.generated-password-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        message.classList.add('generated-password-message');
        document.body.appendChild(message);
    }else{
        alert("Enter length please.");
    }
});


funny_btn.addEventListener('click',(e)=>{
    e.preventDefault();
        user.password = Password.funnyPassword();
        console.log(user.password);
        let message = document.createElement('p');
        message.innerHTML+=`Your generated funny password is : ${user.password}`;
        let existingMessage = document.querySelector('.generated-password-message');
        console.log(existingMessage);
        //checking if there is already a message element.
        if (existingMessage) {
            existingMessage.remove();
        }

        message.classList.add('generated-password-message');
        document.body.appendChild(message);
    }
);









