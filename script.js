function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

var A_tableauInt = [];

for (let i = 0; i < 20; i++) {
    A_tableauInt.push(getRandomInt())
}

console.log(A_tableauInt) 

var balise = document.getElementById("tableau")

balise.textContent = A_tableauInt;
