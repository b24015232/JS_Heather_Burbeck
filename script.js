// Fonction qui prend en argument un intervalle de valeur et qui génère de maniere aléatoire des entiers dans cette intervalle. 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var A_arrayInt = []; // Déclaration du tableau des entiers
var O_arrayIntZone = document.getElementById("arrayInt"); // Récupération de l'ID de la balise qui contiendra le tableau
var O_arrayTextZone = document.getElementById("comment"); // Récupération de l'ID de la balise qui conteindra le text 
var I_i = 0;
// Cette fonction ajoute un entier puis l'affiche dans la balise jusqu'a 20 intérations. 
function addRandomNumbersToArray() {
    if (I_i < 20) {
        A_arrayInt.push(getRandomInt(-10, 40))
        O_arrayIntZone.textContent = A_arrayInt[I_i]
        changeTextDisplay(I_i) // la fonction changeTextDisplay est appelée, et prend en argument l'itérateur de la fonction addRamdomNumbersToArray()
        changeStyleDisplay(I_i) // la fonction changeStyleDisplay est appelée, et prend en argument l'itérateur de la fonction addRamdomNumbersToArray()
        I_i++;
    } else {
        clearInterval(); // Arret de la boucle de setInterval(). 
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
        O_arrayTextZone.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !"
    } else if (A_arrayInt[I_y] > 30) {
        O_arrayTextZone.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!"
    }
    else {
        O_arrayTextZone.textContent = " "
    }
}


// Intervalle de 2 seconde définie entre l'affichage des nombres dans le tableau
setInterval(addRandomNumbersToArray, 2000)



