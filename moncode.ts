/// <reference path="fonctions.ts"/>
creerZoneDessin();
let nbrectangles_max:number=largeurZone()/100;
let nbrectangles:number=lireNombre("Combien de rectangles voulez-vous afficher ?");

let couleur:string;

if(nbrectangles>nbrectangles_max)
{
	console.log("Valeur trop grande, nous ne tracerons que "+nbrectangles_max+ " rectangles");
	nbrectangles=nbrectangles_max;
}
	
let norectangle:number=0;
for(norectangle=0;norectangle<nbrectangles;norectangle++){
	if(norectangle == 0) {
		couleur="pink";
	}
	else if(norectangle == 1) {
		couleur="green";
	}
	else if(norectangle == 2) {
		couleur="red";
	}
	else {
		couleur="blue";
	}
	dessinerRectangleRempli(100*norectangle,200,10,100,couleur);
}
