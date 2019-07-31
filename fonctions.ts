/**
 * FONCTIONS
 */
 
var zoneDessinCreee = false;
var canvas: HTMLCanvasElement;
var context: CanvasRenderingContext2D;	
var defaultFill : string;
var defaultStroke : string;
var stroke: boolean;

/**
 * Crée une zone de dessin dans la div d'id: canvas 
 */
function creerZoneDessin() : void{
	if(zoneDessinCreee==true)
	{
		console.log("ERREUR: ZONE DE DESSIN DEJA CREEE");
	}
	else
	{
		canvas = document.getElementById('canvas') as
					 HTMLCanvasElement;
		context = canvas.getContext("2d");
		defaultFill="red";
		stroke=false;
		defaultStroke="black";
		zoneDessinCreee=true;
	}

}


function existanceZoneDessin(): void {
	if(zoneDessinCreee == false)
	{
		console.log("ERREUR: LA ZONE DE DESSIN N'EXISTE PAS");
		return;
	}
}
/**
 * Efface le contenu de la zone de dessin
 **/
function effacerDessin(): void{
	existanceZoneDessin();
	context.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * @returns la hauteur de la zone de dessin
 **/
function hauteurZone(): number{
	return canvas.height;
}

/**
 * @returns la largeur de la zone de dessin
 **/
function largeurZone(): number{
	return canvas.width;
}



/**
 * Dessine un rectangle (non rempli) avec bords noirs
 * @param posX position en X du coin haut gauche du rectangle
 * @param posY position en Y du coin haut gauche du rectangle
 * @param largeur largeur du rectangle
 * @param hauteur hauteur du rectangle 
 */
function dessinerRectangle(posX: number, posY: number, largeur: number,hauteur: number) : void{
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
function dessinerRectangleArrondi(posX: number, posY: number, largeur: number,hauteur: number,rayon:number=5) : void{
	existanceZoneDessin();
	let r = posX + largeur;
	let b = posY + hauteur;
	context.beginPath();
	context.moveTo(posX+rayon, posY);
	context.lineTo(r-rayon, posY);
	context.quadraticCurveTo(r, posY, r, posY+rayon);
	context.lineTo(r, posY+hauteur-rayon);
	context.quadraticCurveTo(r, b, r-rayon, b);
	context.lineTo(posX+rayon, b);
	context.quadraticCurveTo(posX, b, posX, b-rayon);
	context.lineTo(posX, posY+rayon);
	context.quadraticCurveTo(posX, posY, posX+rayon, posY);
	context.strokeStyle = defaultStroke;
	context.stroke();
}

/**
 * Dessine un rectangle avec couleur de remplissage
 * @param posX position en X du coin haut gauche du rectangle
 * @param posY position en Y du coin haut gauche du rectangle
 * @param couleur "red" par défaut
 */
function dessinerRectangleRempli(posX: number, posY: number, largeur: number,hauteur: number,couleur ?: string) : void{
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
function dessinerCercle(centreX: number, centreY: number, rayon: number) : void{
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
function dessinerCercleRempli(centreX: number, centreY: number, rayon: number,couleur ?: string) : void{
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
function dessinerSegment(posX1:number, posY1:number,posX2:number, posY2:number) : void{
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
function dessinerEtoileGenerique(cx:number, cy:number, spikes:number, outerRadius:number, innerRadius:number): void {
	existanceZoneDessin();
	var rot:number = Math.PI / 2 * 3;
    var x:number = cx;
    var y:number = cy;
    var step:number = Math.PI / spikes;
    var i:number;

    context.beginPath();
    context.moveTo(cx, cy - outerRadius)
    for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        context.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        context.lineTo(x, y)
        rot += step
    }
    context.lineTo(cx, cy - outerRadius)
    context.closePath();
    context.stroke();
}

/**
 * Dessine une etoile à 5 sommets avec bords noirs, largeur de 1
 * @param cx position en X du centre
 * @param cy position en Y du centre
 */
function dessinerEtoile5(cx:number, cy:number) : void {
	dessinerEtoileGenerique(cx,cy,5, 30,15);
}

/**
 * Dessine une etoile à 6 sommets avec bords noirs, largeur de 1
 * @param cx position en X du centre
 * @param cy position en Y du centre
 */
function dessinerEtoile6(cx:number, cy:number): void {
	dessinerEtoileGenerique(cx,cy,6, 30,15);
}



/**
 * Dessine un segment
 * @param posX1 position en X du premier point
 * @param posY1 position en Y du premier point
 * @param posX2 position en X du deuxième point
 * @param posY2 position en Y du deuxième point
 * @param epaisseur
 */
function dessinerSegment2(posX1:number, posY1:number,posX2:number, posY2:number, epaisseur:number, couleur:string) : void{
	existanceZoneDessin();
	context.beginPath();
	context.moveTo(posX1, posY1);
	context.lineTo(posX2, posY2);
	context.lineWidth = epaisseur;
	strokeShape(couleur);
	context.lineWidth = 1;
}

function afficherTexte(message:string) {
  alert(message);	
}

function recupererTexteZone(idZone:string) : string {
	const inputElement = document.getElementById(idZone) as HTMLInputElement;
	return inputElement.value;
}

function lireTexte(messageAffiche:string) : string {
  var txt;
  var texte = prompt(messageAffiche, "--");
  if (texte == null || texte == "") {
    txt = "";
  } else {
    txt = texte;
  }
  return txt;	
}

function lireNombre(messageAffiche:string) : number {
	var number;
	do {
	  number = parseInt(prompt(messageAffiche));
	}
	while (isNaN(number));
	return number;
}

function setFill(couleur?:string){
	if(couleur)
		context.fillStyle = couleur;
	else
		context.fillStyle = defaultFill;
}

function strokeShape(couleur?:string){
	if(couleur)
		context.strokeStyle = couleur;
	else
		context.strokeStyle = defaultStroke;
	context.stroke();
	context.strokeStyle = defaultStroke;
}
