/// <reference path="fonctions.ts"/>
var espacement;
var nbrectangles_max;
var nbrectangles;
var norectangle;
creerZoneDessin();
espacement = -1;
while ((espacement < 0) || (espacement >= 200) || (espacement % 10 != 0)) {
    espacement = lireNombre("Combien voulez-vous d'espacement entre les rectangles (entre 0 et 200, multiple de 10)?");
}
nbrectangles_max = largeurZone() / espacement;
nbrectangles = -1; // initialisation pour rentrer dans la boucle
while ((nbrectangles < 0) || (nbrectangles >= nbrectangles_max)) {
    nbrectangles = lireNombre("Combien de rectangles voulez-vous afficher (entre 0 et " + nbrectangles_max + ")?");
}
for (norectangle = 0; norectangle < nbrectangles; norectangle++) {
    dessinerRectangleRempli(espacement * norectangle, 200, 10, 100, "blue");
}
