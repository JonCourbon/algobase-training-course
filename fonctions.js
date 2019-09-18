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
/**
 * Efface le contenu de la zone de dessin
 **/
function effacerDessin() {
    existanceZoneDessin();
    context.clearRect(0, 0, canvas.width, canvas.height);
}
/**
 * @returns la hauteur de la zone de dessin
 **/
function hauteurZone() {
    return canvas.height;
}
/**
 * @returns la largeur de la zone de dessin
 **/
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
 * @param couleur  (couleur css: "red" / "#FF00FF" / "rgb(255,0,0)" ...; par défaut: rouge)
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
 * Dessine une etoile avec bords noirs, largeur de 1
 * @param cx position en X du centre
 * @param cy position en Y du centre
 * @param spikes nombre de sommets
 */
function dessinerEtoileGenerique(cx, cy, spikes, outerRadius, innerRadius) {
    existanceZoneDessin();
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;
    var i;
    context.beginPath();
    context.moveTo(cx, cy - outerRadius);
    for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        context.lineTo(x, y);
        rot += step;
        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        context.lineTo(x, y);
        rot += step;
    }
    context.lineTo(cx, cy - outerRadius);
    context.closePath();
    context.stroke();
}
/**
 * Dessine une etoile à 5 sommets avec bords noirs, largeur de 1
 * @param cx position en X du centre
 * @param cy position en Y du centre
 */
function dessinerEtoile5(cx, cy) {
    dessinerEtoileGenerique(cx, cy, 5, 30, 15);
}
/**
 * Dessine une etoile à 6 sommets avec bords noirs, largeur de 1
 * @param cx position en X du centre
 * @param cy position en Y du centre
 */
function dessinerEtoile6(cx, cy) {
    dessinerEtoileGenerique(cx, cy, 6, 30, 15);
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
/**
 * Dessine un texte rempli (en noir)
 * @param posX position en X du coin haut gauche
 * @param posY position en Y du coin haut gauche
 * @param texte texte à afficher
 */
function dessinerTexte(posX, posY, texte) {
    existanceZoneDessin();
    context.font = "20pt Calibri,Geneva,Arial";
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.fillText(texte, posX, posY);
}
/**
 * Dessine un texte coloré, d'une certaine taille de police
 * @param posX position en X du coin haut gauche
 * @param posY position en Y du coin haut gauche
 * @param couleur couleur (couleur css: "red" / "#FF00FF" / "rgb(255,0,0)" ...)
 * @param taillepolice taille de la police en pixel (20 par défaut)
 * @param texte texte à afficher
 */
function dessinerTexte2(posX, posY, texte, couleur, taillepolice) {
    existanceZoneDessin();
    if (!taillepolice)
        taillepolice = 20;
    context.font = "" + taillepolice + "pt Calibri,Geneva,Arial";
    context.strokeStyle = couleur;
    context.fillStyle = couleur;
    context.fillText(texte, posX, posY);
}
/**
 * Affiche un texte dans une popup
 * @param message Le texte à afficher
 */
function afficherTexte(message) {
    alert(message);
}
/**
 * Lit le texte écrit dans la zone d'identifiant idZone
 * @return le texte
 */
function recupererTexteZone(idZone) {
    var inputElement = document.getElementById(idZone);
    return inputElement.value;
}
/**
 * Affiche une popup où le message est affiché et où l'utilisateur doit saisir une chaine de caracteres.
 */
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
/**
 * Affiche une popup où le message est affiché et où l'utilisateur doit saisir un nombre. Celle-ci se ré-ouvre tant que ce n'est pas un entier
 */
function lireNombre(messageAffiche) {
    var number;
    do {
        number = parseInt(prompt(messageAffiche));
    } while (isNaN(number));
    return number;
}
/**
 * Change la couleur de remplissage par défaut
 * @param couleur (couleur css: "red" / "#FF00FF" / "rgb(255,0,0)" ...)
 */
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
/**
 * Génère un nombre aléatoire entre 0 et N
 * @param N: nombre maximum
*/
function nombreAleatoire(N) {
    return Math.floor(Math.random() * N);
}
