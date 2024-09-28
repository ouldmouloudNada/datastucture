//1. Function to filter even numbers from an array
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); 

//2. Function to return people over 30 from an array of objects
function getPeopleOver30(people) {
    return people.filter(person => person.age > 30);
}
let peopleArray = [
    { name: "Alice", age: 25, email: "alice@example.com" },
    { name: "Bob", age: 35, email: "bob@example.com" },
    { name: "Charlie", age: 32, email: "charlie@example.com" }
];

console.log(getPeopleOver30(peopleArray));  


//3. Implementing a Stack using an array
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) return "Underflow";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}
let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop());  
console.log(stack.peek()); 

//4. Implementing a Queue using an array
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if (this.items.length === 0) return "Underflow";
        return this.items.shift();
    }
    front() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }    size() {
        return this.items.length;
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue()); 
console.log(queue.front());   

//5. Function to remove vowels from a string
function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}
console.log(removeVowels("Professor Layton")); 
 

//6. Function to return unique elements from two arrays
function uniqueElements(arr1, arr2) {
    let combined = [...arr1, ...arr2];
    return [...new Set(combined)];
}
console.log(uniqueElements([1, 2, 3], [3, 4, 5]));  





