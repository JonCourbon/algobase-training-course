# algobase-training-course
# TEST 1 (après étape 4)

Dans la suite, on suppose que les deux lignes suivantes sont écrites  au début des programmes

    /// <reference path="fonctions.ts"/>
    creerZoneDessin();

Analisez, comprenez le code avant de le tester / modifier !

----
## Question 1
On souhaite dessiner un cercle rempli en vert:

    dessinerCercle(200,200,20,"green");

- Pourquoi y'a-t-il une erreur à la compilation ? Corrigez le code et testez.
- Quel est le rayon du cercle ?


----
## Question 2
    dessinerCercle(800,800,20);

- Pourquoi le cercle n'est pas visible ?

----
## Question 3
    positionCentreX=200;
    positionCentreY=300;
    dessinerCercle(positionCentreX,positionCentreY,20);

- Pourquoi y'a-t-il une erreur à la compilation ? Corrigez le code et testez.

----
## Question 4
    positionCentreX=200;
    positionCentreY=300;
    dessinerCercle(positionCentreX,positionCentreX,20);

- En quelle position est tracé le cercle ?

----
## Question 5
    let posX:number;
    for(posX=100;posX<500;posX=posX+100)
    {
        dessinerCercle(posX,300,20);
    }

- Les cercles sont alignés verticalement ou horizontalement ?
- Combien de cercles sont tracés ?

----
## Question 6
    let posX:number;
    for(posX=100;posX<500;posX=posX+100)
    {
    }
    dessinerCercle(posX,300,20);

- Combien de cercles sont tracés ? Où sont-ils ?

----
## Question 7
Nous allons tracer 3 cercles remplis.

    let posX:number;
    let couleur:string="blue";
    for(posX=100;posX<100+3*100;posX=posX+100)
    {
        dessinerCercleRempli(posX,300,20,couleur);
        couleur="red";
    }

- De quelle couleur est le 1er cercle ?
- De quelle couleur est le 2ème cercle ?
- De quelle couleur est le 3ème cercle ? 

----
## Question 8
    let posX:number;
    let couleur:string="blue";
    for(posX=100;posX<100+3*100;posX=posX+100)
    {
        couleur="red";
        dessinerCercleRempli(posX,300,20,couleur);
    }

- De quelle couleur est le 1er cercle ?
- De quelle couleur est le 2ème cercle ?
- De quelle couleur est le 3ème cercle ? 

----
## Question 9
    let posX:number;
    let couleur:string="blue";
    for(posX=100;posX<100+3*100;posX=posX+100)
    {
        if(posX<200)
        {
            couleur="red";
        }
        dessinerCercleRempli(posX,300,20,couleur);
    }

- De quelle couleur est le 1er cercle ?
- De quelle couleur est le 2ème cercle ?
- De quelle couleur est le 3ème cercle ? 

----
## Question 10
    let nbcercles:number = 4;
    let nocercle:number;
    let couleur:string="blue";
    for(nocercle=0;nocercle<nbcercles;nocercle++)
    {
        if(nocercle<200)
        {
            couleur="red";
        }
        dessinerCercleRempli(100+nocercle*100,300,20,couleur);
    }

- De quelles couleurs sont les différents cercles ?

----
## Question 11
    let nbcercles:number = 4;
    let nocercle:number;
    let couleur:string="blue";
    for(nocercle=0;nocercle<nbcercles;nocercle++)
    {
        if(nocercle>200)
        {
            couleur="red";
        }
        dessinerCercleRempli(100+nocercle*100,300,20,couleur);
    }

- De quelles couleurs sont les différents cercles ?


