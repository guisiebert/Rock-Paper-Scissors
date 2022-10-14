// New elements used in this exercise:


// ================================================ //


// .querySelectorAll (line 4 of app.js):
const botoes = document.querySelectorAll('button')
// Now possibleChoices is an array with all 'button' elements
console.log(botoes)


// ================================================ //


// .forEach() (line 9 of app.js)
// This function iterates through the items of an array and applies a function
const compras = ["maca", "pera", "arroz", "cachorro verde"]

function euGosto(dessaCoisa) {
    console.log("Eu gosto muito de " + dessaCoisa)
}

compras.forEach(euGosto)


// ================================================ //


// In-line function in ECMAScript 6 (line 9 of app.js)
// array.forEach(v => function)
// READ MORE: https://www.sololearn.com/learning/1024/2970/6513/1

// Trad way was:
const arr1 = [2,4,6,8]
arr1.forEach(function(el) {
    console.log(el*2)
});

// New way is:
const arr2 = [3,6,9,12]
arr2.forEach(el => console.log(el*2))


// ================================================ //


// .addEventListener (line 9 of app.js)

const rockBtn = document.getElementById("Rock"); // rockBtn = botão do rock
rockBtn.addEventListener("click", (cachoro) => euGosto("caqui"))
// ou seja, ao rolar "click" em rock, é executada uma função (euGosto). 
// "(cachoro)" existe ali simplesmente pra nomear o evento, ele então chama uma função.
// Nesse exemplo nenhuma info sobre o evento foi necessária.

// CONTINUAR COM EXEMPLO QUE USA A ID DO EVENTO



// ================================================ //