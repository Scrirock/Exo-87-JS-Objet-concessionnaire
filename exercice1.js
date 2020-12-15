let voiture = {
    nom : "Eggo",
    imgUrl : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    nombresRoues : 4,
    couleur : "Marron",
    contructeur : "Citroen",
    carburant : "Solaire",
    nombrePortes : 3,
    autonomie : "450km",
    vitesseMaxi : "120km/h"
};

document.getElementById("image").src = voiture.imgUrl;
document.getElementById("image").style.float = "right";
document.getElementById("nom").innerHTML = "Nom: " + voiture.nom;
document.getElementById("nbrPorte").innerHTML = "Nombre de porte: " + voiture.nombrePortes;
document.getElementById("nbrRoues").innerHTML = "Nombre de roues: " + voiture.nombresRoues;
document.getElementById("couleur").innerHTML = "Couleur: " + voiture.couleur;
document.getElementById("carburant").innerHTML = "Carburant utilisé: " + voiture.carburant;
document.getElementById("constructeur").innerHTML = "Constructeur: " + voiture.contructeur;
document.getElementById("autonomie").innerHTML = "Autonomie: " + voiture.autonomie;
document.getElementById("vitesseMax").innerHTML = "Vitesse maximum: " + voiture.vitesseMaxi;


