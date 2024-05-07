const person = {
    name: "Muralitharan",
    age: 22,
    city: "Salem"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}