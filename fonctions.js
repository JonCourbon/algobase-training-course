/**
 * FONCTIONS
 */
var zoneDessinCreee = false;
var canvas;
var context;
var defaultFill;
var defaultStroke;
var stroke;
/**
 * Crée une zone de dessin dans la div d'id: canvas
 */
function creerZoneDessin() {
    if (zoneDessinCreee == true) {
        console.log("ERREUR: ZONE DE DESSIN DEJA CREEE");
    }
    else {
        canvas = document.getElementById('canvas');
        context = canvas.getContext("2d");
        defaultFill = "red";
        stroke = false;
        defaultStroke = "black";
        zoneDessinCreee = true;
    }
}
function existanceZoneDessin() {
    if (zoneDessinCreee == false) {
        console.log("ERREUR: LA ZONE DE DESSIN N'EXISTE PAS");
        return;
    }
}
function effacerDessin() {
    existanceZoneDessin();
    context.clearRect(0, 0, canvas.width, canvas.height);
}
function hauteurZone() {
    return canvas.height;
}
function largeurZone() {
    return canvas.width;
}
/**
 * Dessine un rectangle (non rempli) avec bords noirs
 * @param posX position en X du coin haut gauche du rectangle
 * @param posY position en Y du coin haut gauche du rectangle
 * @param largeur largeur du rectangle
 * @param hauteur hauteur du rectangle
 */
function dessinerRectangle(posX, posY, largeur, hauteur) {
    existanceZoneDessin();
    context.beginPath();
    context.rect(posX, posY, largeur, hauteur);
    strokeShape();
}
/**
 * Dessine un rectangle (non rempli) avec bords noirs et coins arrondis
 * @param posX position en X du coin haut gauche du rectangle
 * @param posY position en Y du coin haut gauche du rectangle
 * @param largeur largeur du rectangle
 * @param hauteur hauteur du rectangle
 */
function dessinerRectangleArrondi(posX, posY, largeur, hauteur, rayon) {
    if (rayon === void 0) { rayon = 5; }
    existanceZoneDessin();
    var r = posX + largeur;
    var b = posY + hauteur;
    context.beginPath();
    context.moveTo(posX + rayon, posY);
    context.lineTo(r - rayon, posY);
    context.quadraticCurveTo(r, posY, r, posY + rayon);
    context.lineTo(r, posY + hauteur - rayon);
    context.quadraticCurveTo(r, b, r - rayon, b);
    context.lineTo(posX + rayon, b);
    context.quadraticCurveTo(posX, b, posX, b - rayon);
    context.lineTo(posX, posY + rayon);
    context.quadraticCurveTo(posX, posY, posX + rayon, posY);
    context.strokeStyle = defaultStroke;
    context.stroke();
}
/**
 * Dessine un rectangle avec couleur de remplissage
 * @param posX position en X du coin haut gauche du rectangle
 * @param posY position en Y du coin haut gauche du rectangle
 * @param couleur "red" par défaut
 */
function dessinerRectangleRempli(posX, posY, largeur, hauteur, couleur) {
    existanceZoneDessin();
    context.beginPath();
    setFill(couleur);
    context.fillRect(posX, posY, largeur, hauteur);
    context.fillStyle = defaultFill;
}
/**
 * Dessine un cercle (non rempli) avec bords noirs
 * @param centerX position du centre en X
 * @param centerY position en Y du centre
 * @param rayon rayon du cercle
 */
function dessinerCercle(centreX, centreY, rayon) {
    existanceZoneDessin();
    context.beginPath();
    context.arc(centreX, centreY, rayon, 0, 2 * Math.PI);
    strokeShape();
}
/**
 * Dessine un cercle rempli
 * @param centerX position du centre en X
 * @param centerY position en Y du centre
 * @param rayon rayon du cercle
 */
function dessinerCercleRempli(centreX, centreY, rayon, couleur) {
    existanceZoneDessin();
    context.beginPath();
    context.arc(centreX, centreY, rayon, 0, 2 * Math.PI);
    setFill(couleur);
    context.fill();
    context.fillStyle = defaultFill;
}
/**
 * Dessine un segment avec bords noirs, largeur de 1
 * @param posX1 position en X du premier point
 * @param posY1 position en Y du premier point
 * @param posX2 position en X du deuxième point
 * @param posY2 position en Y du deuxième point
 */
function dessinerSegment(posX1, posY1, posX2, posY2) {
    existanceZoneDessin();
    context.beginPath();
    context.moveTo(posX1, posY1);
    context.lineTo(posX2, posY2);
}
/**
 * Dessine un segment
 * @param posX1 position en X du premier point
 * @param posY1 position en Y du premier point
 * @param posX2 position en X du deuxième point
 * @param posY2 position en Y du deuxième point
 * @param epaisseur
 */
function dessinerSegment2(posX1, posY1, posX2, posY2, epaisseur, couleur) {
    existanceZoneDessin();
    context.beginPath();
    context.moveTo(posX1, posY1);
    context.lineTo(posX2, posY2);
    context.lineWidth = epaisseur;
    strokeShape(couleur);
    context.lineWidth = 1;
}
function afficherTexte(message) {
    alert(message);
}
function recupererTexteZone(idZone) {
    var inputElement = document.getElementById(idZone);
    return inputElement.value;
}
function lireTexte(messageAffiche) {
    var txt;
    var texte = prompt(messageAffiche, "--");
    if (texte == null || texte == "") {
        txt = "";
    }
    else {
        txt = texte;
    }
    return txt;
}
function lireNombre(messageAffiche) {
    var number;
    do {
        number = parseInt(prompt(messageAffiche));
    } while (isNaN(number));
    return number;
}
function setFill(couleur) {
    if (couleur)
        context.fillStyle = couleur;
    else
        context.fillStyle = defaultFill;
}
function strokeShape(couleur) {
    if (couleur)
        context.strokeStyle = couleur;
    else
        context.strokeStyle = defaultStroke;
    context.stroke();
    context.strokeStyle = defaultStroke;
}
