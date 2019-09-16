# algobase-training-course
# TEST 1 (après étape 3)

Dans la suite, on suppose que les deux lignes suivantes sont écrites  au début des programmes

    /// <reference path="fonctions.ts"/>
    creerZoneDessin();

Analysez, comprenez le code avant de le tester / modifier !

----
## Question 1
Soit le code suivant:

    let nom:string="Courbon";
    console.log("nom");

- Qu'est-ce qui est affiché dans la console? Si ce n'est pas Courbon, modifiez le code et testez.


----
## Question 2
On souhaite dessiner un cercle, son rayon vaut 20:

    let rayon:number;
    dessinerCercle(200,200,rayon);

- Pourquoi y'a-t-il une erreur à la compilation ? Corrigez le code et testez.

----
## Question 3
On souhaite dessiner un cercle rempli en vert:

    dessinerCercle(200,200,20,"vert");

- Pourquoi y'a-t-il une erreur à la compilation ? Corrigez le code et testez.

----
## Question 4
On souhaite dessiner un rectangle rempli en rose:

    dessinerRectangleRempli(200,200,20,40,pink);

- Pourquoi y'a-t-il une erreur à la compilation ? Corrigez le code et testez.
- Quelle est la largeur du rectangle ?

----
## Question 5
    dessinerCercle(800,800,20);

- Pourquoi le cercle n'est pas visible ?

----
## Question 6
    positionCentreX=200;
    positionCentreY=300;
    dessinerCercle(positionCentreX,positionCentreY,20);

- Pourquoi y'a-t-il une erreur à la compilation ? Corrigez le code et testez.
- En quelle position est tracé le cercle ?


----
## Question 7
    dessinerCercle(10,20,20);
    dessinerCercle(10,20,20);
    dessinerCercle(10,20,20);


- Combien de cercles sont dessinés ?
- Combien de cercles sont visibles ?

----
## Question 8
    let posX:number;
    for(posX=100;posX<500;posX=posX+100)
    {
        dessinerCercle(posX,300,20);
    }

- Les cercles sont alignés verticalement ou horizontalement ?
- Combien de cercles sont tracés ?

----
## Question 9
    let posX:number;
    for(posX=100;posX<500;posX=posX+100)
    {
    }
    dessinerCercle(posX,300,20);

- Combien de cercles sont tracés ? Où sont-ils ?

----
## Question 10
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
## Question 11
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
## Question 12
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
## Question 13
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
## Question 14
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

----
## Question 15
    let nbcercles:number;
    let nbcercles:number = 4;

- Pourquoi y'a-t-il une erreur à la compilation ?

----
## Question 16
    let nbcercles:number;
    nbcercles = 4;
    nbcercles = 6 + nbcercles;
    nbcercles = 3;
    nbcercles = 2;

- Donnez la "trace" de la variable nbcercles (c'est-à-dire la valeur de cette variable à chaque instruction).

----
Dans la suite, essayez de trouver la solution sans coder puis traduisez le code en Typescript pour tester/valider.
----
## Question 17
    Entier i;
    Pour i de 0 à 6 pas de 1 faire
        dessinerCercle(i*20,20,10);
    Fin Pour

- Combien de cercles sont dessinés ?

----
## Question 18
    Entier k;
    Pour k de 8 à 13 pas de 2 faire
        dessinerCercle(i*10,20,10);
    Fin Pour

- Combien de cercles sont dessinés ?
----
## Question 19
    Entier nbcercles;
    Entier nocercle;
    Chaine couleur;
    nbcercles <-5;
    couleur <- "blue";
    Pour nocercle de 0 à nbcercles pas de 1 faire
        dessinerCercleRempli(i*10,0,10,couleur);
        Si (nbcercles %2 == 0) alors
            couleur <- "red";
        Fin Si
    Fin Pour

- Combien de cercles sont dessinés ?
- De quelles couleurs sont-ils ?

----
## Question 20
    Entier nbcercles;
    Entier nocercle;
    Chaine couleur;
    nbcercles <-5;
    couleur <- "blue";
    Si (nbcercles %2 == 1) alors
        couleur <- "red";
    Fin Si
    Pour nocercle de 0 à nbcercles pas de 1 faire
        Si (nocercle %2 == 0) alors
            dessinerCercleRempli(i*10,0,10,couleur);
        Fin Si
    Fin Pour

- Combien de cercles sont dessinés ?
- De quelles couleurs sont-ils ?

----
## Question 21
    Entier age;
    Afficher("Entrez votre age");
    age <- Lire(); // voir doc, fonction lireNombre
    Si(age >= 18) alors
        Afficher("Vous etes majeur");
    Fin Si
    
- Traduire ce code en Ts
- Ajouter l'affichage "vous êtes mineur" quand c'est le cas