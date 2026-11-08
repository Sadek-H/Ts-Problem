What is Type Narrowing in TypeScript? Provide practical examples using typeof, instanceof, and the in operator.

Answer:


Type Narrowing , checks the values type.

Ex:   

1.
let value: string | number = "Sadek";

if (typeof value === "string") {
    console.log(value);
}

2.
class Dog {

}


const pet = new Dog();

console.log(pet instanceof Dog);

mean  the pet obj belongs to dog class .

3.
const student = {
    name: "Sadek"
 
};
console.log("name" in student); 