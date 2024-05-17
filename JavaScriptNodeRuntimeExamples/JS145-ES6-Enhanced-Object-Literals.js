//<!--Enhanced Object Literals-->
function getMobile(manufacturer, model, year) {
    return {
       manufacturer,
       model,
       year
    }
 }
 let mobileInfo = getMobile("Samsung", "Galaxy A30s", "2020");
 console.log(mobileInfo);