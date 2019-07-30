/// <reference path="fonctions.ts"/>

// Declaration des événements
document.getElementById('effacer')
		.addEventListener("click", boutonEffacerAppuye);
		
document.getElementById('envoyer')
		.addEventListener("click", boutonEnvoyerAppuye);

function boutonEffacerAppuye() : void{
	effacerDessin();
}

function boutonEnvoyerAppuye() : void{
	// on lit la valeur du texte
	var message=recupererTexteZone("zonetexte");
	afficherTexte(message);
}

creerZoneDessin();
dessinerRectangle(10,10,200,300);


