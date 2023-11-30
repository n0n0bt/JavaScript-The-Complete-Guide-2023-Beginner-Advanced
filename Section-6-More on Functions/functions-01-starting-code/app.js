const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
console.log("Game is started!");
}

// const person = {
//     name: "Max",
//     greet: function greet() {
//         console.log("Hello there!");
//     }
// }

// person.greet();

console.dir(startGame);

startGameBtn.addEventListener("click", startGame);