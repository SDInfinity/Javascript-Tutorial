
class Animal{
    constructor(name)
    {
        this._name=name;
    }
    get name()
    {
        return this._name;
    }
    
    set name(newName)
    {
        this._name=newName;
    }
}

let animal =new Animal("Chicken")

//we can now directly access/log the name:
//before setting name
console.log(animal.name+".");
animal.name = "Dog";
//after setting name
console.log(animal.name+".");

//instanceOf operator to check wether an obj belongs to a certain class or not.

console.log(animal instanceof Animal);

//real-life-example: 

// class User {
//     constructor(username) {
//       this.username = username;
//       this._password = '';
//     }
  
//     // Getter method for password
//     get password() {
//       return '*****'; // Return masked password for security reasons
//     }
  
//     // Setter method for password
//     set password(newPassword) {
//       // Enforce password requirements: at least 8 characters, 1 uppercase letter, and 1 number
//       const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
//       if (regex.test(newPassword)) {
//         this._password = newPassword;
//         console.log('Password set successfully!');
//       } else {
//         console.log('Password must be at least 8 characters long and include at least 1 uppercase letter and 1 number.');
//       }
//     }
//   }
  
//   const user1 = new User('johndoe');
//   user1.password = 'password123'; // This should fail
//   user1.password = 'SecureP@ssword1'; // This should succeed
//   console.log(user1.password); // This should output '*****'
  