// Intro to asynchronous programming and fetch() from an api
// Synchronous code
"synchronous code means code which executes in sequence"
// "sync": together, aligned, sequential, matched up, step-by-step, harmony, accord
// "chrono": time

// Asynchronous code
"asynchronous code means code which does NOT execute in sequence"
// "A-" means "not"

console.log("1. first")
setTimeout(() => console.log("7. seventh"), 5000)
setTimeout(() => console.log("3. third"), 0)
setTimeout(() => console.log("4. fourth"), 0)
setInterval(() => {}, 0) // async code this is non-blocking. this is an ifinite loop which DOESN'T block other things from happening.
setTimeout(() => console.log("5. fifth"), 0)
setTimeout(() => console.log("6. sixth"), 1000)
console.log("2. second")

// fetch data from api
let mainElement = document.querySelector("main")
let searchTextbox = document.querySelector("#search-text")
let searchButton = document.querySelector("#search")

searchButton.addEventListener("click", () => {
    let searchTerm = searchTextbox.value.toLowerCase()

    // fetch pokemon default img from api up to gen 6
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
    .then(response => response.json())
    .then(pokemon => {
        console.log(pokemon)
        
        let imgElement = document.createElement("img")
        imgElement.src = pokemon.sprites.front_default

        mainElement.append(imgElement)
    })
})
// DMG Kenzie Academy 7-29-21
// pokemon imgages: pokeapi.co -- https://sabrinapunjani.files.wordpress.com/2013/10/pokelogo.gif