/// <reference path="fonctions.ts"/>
let espacement:number;
let nbrectangles_max:number;
let nbrectangles:number;
let norectangle:number;

creerZoneDessin();

espacement=-1;// initialisation pour rentrer dans la boucle
while( (espacement<0) || (espacement >=200) || (espacement%10 !=0 ) )
{
	espacement=lireNombre("Combien voulez-vous d'espacement entre les rectangles (entre 0 et 200, multiple de 10)?"); // mise à jour de la valeur
}

nbrectangles_max=largeurZone()/espacement;
nbrectangles=-1; // initialisation pour rentrer dans la boucle

while( (nbrectangles<0) || (nbrectangles >=nbrectangles_max))
{
	nbrectangles=lireNombre("Combien de rectangles voulez-vous afficher (entre 0 et "+nbrectangles_max+")?"); // mise à jour de la valeur
}

// tracé des rectangles
for(norectangle=0;norectangle<nbrectangles;norectangle++){
	dessinerRectangleRempli(espacement*norectangle,200,10,100,"blue");
}

