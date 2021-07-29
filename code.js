
// Synchronous code

// "sync": together, aligned, sequential, matched up, step-by-step, harmony, accord
// "chrono": time

"synchronous code means code which executes in sequence"

console.log("1. first")
setTimeout(() => console.log("5. fifth"), 5000)
setTimeout(() => console.log("3. third"), 0)
setTimeout(() => console.log("4. fourth"), 1000)
console.log("2. second")

// Asynchronous code
// "A-" means "not"
// setInterval() 
"asynchronous code means code which does not execute in sequence"