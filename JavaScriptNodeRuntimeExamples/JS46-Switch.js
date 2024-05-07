let day = "Monday";
let message;

switch (day) {
  case "Monday":
    message = "Today is Monday.";
    break;
  case "Tuesday":
    message = "Today is Tuesday.";
    break;
  case "Wednesday":
    message = "Today is Wednesday.";
    break;
  case "Thursday":
    message = "Today is Thursday.";
    break;
  case "Friday":
    message = "Today is Friday.";
    break;
  case "Saturday":
    message = "Today is Saturday.";
    break;
  case "Sunday":
    message = "Today is Sunday.";
    break;
  // More cases for other days
  default:
    message = "Unknown day.";
}

console.log(message); // Output: "Today is Monday."