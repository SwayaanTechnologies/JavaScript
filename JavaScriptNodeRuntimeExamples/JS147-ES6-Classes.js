//<!--Classes-->
class UserProfile {   
    constructor(firstName, lastName) { 
       this.firstName = firstName;
       this.lastName = lastName;     
    }      
    getName() {       
      console.log(`The Full-Name is ${this.firstName} ${this.lastName}`);    
    } 
 }
 let obj = new UserProfile('Muralitharan', 'Yoganath');
 obj.getName(); // output: The Full-Name is Muralitharan Yoganath