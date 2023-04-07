
let input = document.querySelector(".name");
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

    static setPassword(name) {
        let password = "";
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const specialChars = "!@#$%^&*()_+{}:\"<>?\|[];',./`~";
      
        const requiredChars = [
          lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length)),
          uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length)),
          specialChars.charAt(Math.floor(Math.random() * specialChars.length)),
        ];
      
        password = name + requiredChars.join("");
      
        // Set the length of the password based on the length of the name parameter
        let length = name.length + requiredChars.length + 5;
      
        //to add the remaining characters to the password.
        let remainingChars = lowercaseChars + uppercaseChars + specialChars;
      
        for (let i = 0; i < length - requiredChars.length - name.length; i++) {
          password += remainingChars.charAt(Math.floor(Math.random() * remainingChars.length));
        }
      
        return password;
      }
      
     
    static funnyPassword(name){

        let password="";
        password+=name+"_";

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
    let name = input.value;
    if(name.trim()!='')
    {
        user.password = Password.setPassword(name);
        console.log(user.password);
        let message = document.createElement('p');
        message.innerHTML+=`Your generated password is : ${user.password}`;
        document.body.appendChild(message);
        
    }else{
        alert("Enter name please.");
    } 
});


funny_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let name = input.value;
    if(name.trim()!='')
    {
        user.password = Password.funnyPassword(name);
        console.log(user.password);
        let message = document.createElement('p');
        message.innerHTML+=`Your generated funny password is : ${user.password}`;
        document.body.appendChild(message);
        
    }else{
        alert("Enter name please.");
    } 
});









