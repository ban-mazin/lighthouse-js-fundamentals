const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");



//ex2
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

//ex3
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

//ex4
if (!raining) {
  console.log("Leave your umbrella at home!");
}