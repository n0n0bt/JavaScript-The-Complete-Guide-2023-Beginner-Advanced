function sayHello(name) {
  console.log('Hi ' + name);
}

sayHello();

// Assignment 1
const sayingHello = name => console.log("Hi " + name);
sayingHello("Naum");

// Assignment 2

//1
const sayingHi = (greet, name) => console.log(greet + name);
sayingHi("Hi ","Naum");

//2
const sayingHellou = () => console.log("Hello Naum");
sayingHellou();

//3
const saySomething = name => "Hi" + name;
console.log(saySomething("naum"));

// Assingment 3

const somethingToSay = (greet, name = "Johnny") => console.log(greet + name);
;
somethingToSay("Hi ", "Naum");
somethingToSay("Hi ");

// Assingment 4

const checkInput = (cb, ...strings) => {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }

  if (!hasEmptyText) {
    cb();
  }
  
};

checkInput(() => {
  console.log("All not empty");
}, "Hello", "how arer u", "Whats popiin");