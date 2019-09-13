/// <reference path="fonctions.ts"/>
creerZoneDessin();
var nbrectangles_max = largeurZone() / 100;
var nbrectangles = lireNombre("Combien de rectangles voulez-vous afficher ?");
var couleur;
if (nbrectangles > nbrectangles_max) {
    console.log("Valeur trop grande, nous ne tracerons que " + nbrectangles_max + " rectangles");
    nbrectangles = nbrectangles_max;
}
var norectangle = 0;
for (norectangle = 0; norectangle < nbrectangles; norectangle++) {
    if (norectangle == 1) {
        couleur = "pink";
    }
    else if (norectangle == 2) {
        couleur = "green";
    }
    else if (norectangle == 3) {
        couleur = "red";
    }
    else {
        couleur = "blue";
    }
    dessinerRectangleRempli(100 * norectangle, 200, 10, 100, couleur);
}
