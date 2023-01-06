const task3Element = document.getElementById('task-3');

function greet() {
    alert("Hello there!")
}

function greetUser(name) {
    alert(`Hi there ${name}`);
}


function combStrings(string1, string2, string3) {
    const combi = `${string1} ${string2} ${string3}`;
    return combi;
}


greetUser("Naumche");
task3Element.addEventListener("click", greet);

const combinedElements = combStrings("Nomche", "e", "VERYGOOD");

alert(combinedElements);