var generators = {
    // premier bloc de citation  
    a: [

    ["Un sage ", "un fou ", "Un rêveur ", "Le feignant ", "L'incompétant ", "Le chef ", "Le sportif ", "L'artiste ", "Un gourmand ", "L'inutile ", "L'inconnu "],

    ["cherche à devenir riche ", "attends le bus ", "mange une pomme chaque matin ", "mets toujours une salopette ", "regarde la télévision ", "écoute la radio ", "drague un mouton ", "joue avec une poupée ", "dort dans une voiture ", "adore les slips plutôt que les caleçons ", "presse un jus d'orange "],

    ["pour devenir une personne génial! ", "pour toujours etre à l'heure! ", "par ce que c'est bon pour la santé de manger bio! ", "car l'eau mouille si tu la touche! ", "car les adultes ont toujours presque raison! ", "si demain il pleut des cordes! ", "lorsque un orage aproche à l'horizon! ", "car il fait chaud dans un coquillage! ", "tout simplement car les blondes sont moins brunes que les rousses! ", "cêla évite d'avoir de bon gros hémoroides! "],

	],

    // deuxieme bloc de citation
    b: [

    ["Batman ", "Superman ", "le Joker ", "Le Pinguin ", "Wonder Woman ", "Aquaman ", "Catwoman ", "Green Lantern "],

    ["sauve D.Trump ", "tue une marmotte caché dans un bois ", "mange un milkshake ", "frappe fort dans le foie d'une autruche ", "sauve la Terre ", "aime les nounours ", "filtre soi même son café ", "tombe amoureux de Dardevil "],

    ["car son rêve est de devenir une licorne!!", "pour le plaisir d'avoir 1 euros dans la poche!!! ", "sans raison mon pote!!!!", "juste pour avoir un jus d'orange gratuit à la cantine de la mêre michelle!", "car le yoga aide a devenir riche!!!", "car Apple fusionne avec Google!!!!", "afin d'avoir un mollet de coq !!! ", "car elle n'est pas lui, mais lui sera toujours elle..."],
	]

}

form.style.display = "none";

function startGenerateur() {

    form.style.display = "block";
    startGenerator.style.display = "none";

}

//appel de la fonction pour lancer le generateur de citation
function clic() {

    form.style.display = "block";
    

    document.getElementById("paraCit").innerHTML = "";
    var x = document.getElementById("nbrCitation").value;
    var parseX = parseInt(x);
    var z = document.getElementById("choixGenerateur").value;

    function generateur(generator) {
        var phrase = [];
        for (var i = 0; i < generator.length; i++) {
            phrase.push(generator[i][Math.floor(Math.random() * generator[i].length)]);
        }

        document.getElementById("paraCit").innerHTML += phrase.join("") + "</br>"+ "</br>";
    }

    if (z === "a") {
        for (var i = 0; i < parseX; i++) {
            generateur(generators.a);
        }
    }

    if (z === "b") {
        for (var i = 0; i < parseX; i++) {
            generateur(generators.b);
        }
    }
}

function quit (){
    form.style.display = "none";
    startGenerator.style.display = "block";
    document.getElementById("paraCit").innerHTML = "";
}
var boutonStart = document.getElementById("startGenerator");
boutonStart.addEventListener("click", startGenerateur);

var boutonGenerateur = document.getElementById("generate");
boutonGenerateur.addEventListener("click", clic);

var boutonQuit = document.getElementById("quit");
boutonQuit.addEventListener("click", quit);


