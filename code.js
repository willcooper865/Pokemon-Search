// Synchronous code
"synchronous code means code which executes in sequence"
// "sync": together, aligned, sequential, matched up, step-by-step, harmony, accord
// "chrono": time

// Asynchronous code
// "A-" means "not"
"asynchronous code means code which does not execute in sequence"


console.log("1. first")
setTimeout(() => console.log("7. seventh"), 5000)
setTimeout(() => console.log("3. third"), 0)
setTimeout(() => console.log("4. fourth"), 0)
setTimeout(() => console.log("5. fifth"), 0)
setTimeout(() => console.log("6. sixth"), 1000)
console.log("2. second")
