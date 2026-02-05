// Fonction qui prend en argument un intervalle de valeur et qui génère de maniere aléatoire des entiers dans cette intervalle. 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var A_arrayInt = []; // Déclaration du tableau des entiers
var O_arrayIntZone = document.getElementById("arrayInt"); // Récupération de l'ID de la balise qui contiendra le tableau
var O_arrayTextZone = document.getElementById("comment"); // Récupération de l'ID de la balise qui conteindra le text 
var O_liveDataButton = document.getElementById("liveDataButton");
var O_historyDataButton = document.getElementById("dataHistoryButton");
var O_historyDataZone = document.getElementById("dataHistory");
var O_liveDataZone = document.getElementById("liveData");
var O_historyDataText = document.getElementById("historyText");
var I_j = 0;
// Cette fonction ajoute un entier puis l'affiche dans la balise jusqu'a 20 intérations. 

function addRandomNumbersToArray() {
    let I_i = 0;
    while (I_i < 20) {
        A_arrayInt.push(getRandomInt(-10, 40))
        I_i++
    }
}
var I = 0;
function displayLiveData() {
    if (I < 20) {
        O_arrayIntZone.textContent = A_arrayInt[I];
        console.log(A_arrayInt);
        changeTextDisplay(I); // la fonction changeTextDisplay est appelée, et prend en argument l'itérateur de la fonction addRamdomNumbersToArray()
        changeStyleDisplay(I); // la fonction changeStyleDisplay est appelée, et prend en argument l'itérateur de la fonction addRamdomNumbersToArray()
        I += 1
        console.log(I);
    } else {
        clearInterval(); // Arret de la boucle de setInterval(). 
    }


}
var I_y = 0;
var A_arrayHistory = [];
function displayDataHistory() {
    if (I_y < 20) {
        A_arrayHistory.push(A_arrayInt[I_y]);
        console.log(A_arrayHistory)
        O_historyDataText.textContent = A_arrayHistory;
        I_y += 1;
    } else {
        clearInterval();
    }
}

// Cette fonction change l'attribut "Class" en fonction de la valeur du tableau. Il prend en argument un itérateur. 
function changeStyleDisplay(I_y) {
    if (A_arrayInt[I_y] < 0) {
        O_arrayIntZone.setAttribute("class", "borderBlue");
    } else if (A_arrayInt[I_y] < 20) {
        O_arrayIntZone.setAttribute("class", "borderGreen");
    } else if (A_arrayInt[I_y] < 30) {
        O_arrayIntZone.setAttribute("class", "borderOrange");
    } else if (A_arrayInt[I_y] < 40) {
        O_arrayIntZone.setAttribute("class", "borderRed");
    }
}

// Cette fonction change le contenu de la balise "comment". 
function changeTextDisplay(I_y) {
    if (A_arrayInt[I_y] < 0) {
        O_arrayTextZone.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
    } else if (A_arrayInt[I_y] > 30) {
        O_arrayTextZone.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
    }
    else {
        O_arrayTextZone.textContent = " ";
    }
}


O_historyDataZone.hidden = false;
O_liveDataZone.hidden = false;
O_historyDataButton.addEventListener("click", function () {
    O_historyDataZone.hidden = !O_historyDataZone.hidden;
})


O_liveDataButton.addEventListener("click", function () {
    O_liveDataZone.hidden = !O_liveDataZone.hidden;
})



// Intervalle de 2 seconde définie entre l'affichage des nombres dans le tableau
addRandomNumbersToArray();
setInterval(displayLiveData, 2000);
setInterval(displayDataHistory, 2000)


