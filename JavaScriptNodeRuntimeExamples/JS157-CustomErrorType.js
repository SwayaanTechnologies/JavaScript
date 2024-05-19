//class CheckCondition extends Error { 
//    constructor(msg) { 
//        super(msg); 
//    } 
//} 
//  
//try { 
//    if (10 != 20)  
//        throw new CheckCondition("10 is not equal to 20"); 
//} 
//catch (err) { 
//    console.error(err); 
//}

function CheckCondition(msg = "") { 
    this.msg = msg; 
    this.name = "CheckCondition"; 
} 
CheckCondition.prototype = Error.prototype; 
  
try { 
    if (10 != 20)  
        throw new CheckCondition("10 is not equal to 20"); 
} 
catch (err) { 
    console.error(err); 
}