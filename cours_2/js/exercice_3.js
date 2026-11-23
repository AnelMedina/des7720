// DES7720 — EXERCICE 3 — Conditions, animations et sons
//toujours nommer ici
let ellipsePosX;
let ellipsePosY;
let distanceMouseEllipse;
let vitesse;

// setup() STATIQUE est une fonction qui s’exécute une seule fois au début du script
// roule 1 fois au début du script         
function setup() {

createCanvas(640,640);
ellipsePosX = width/2;
ellipsePosY = height/2;

}
// fuctions invidividuelles MOUVEMENT
// Dessiner en boucle.
function draw() {
background(100,100,100);



distanceMouseEllipse = dist(mouseX,mouseY,ellipsePosX,ellipsePosY);
console.log(distanceMouseEllipse);



vitesse = map(distanceMouseEllipse,0,width,5,0.001);



//ellipsePosX = constrain(ellipsePosX,100, width -100);
//ellipsePosY = constrain(ellipsePosY,100, height -100);

if (mouseX > ellipsePosX) {
ellipsePosX = ellipsePosX - vitesse;
}
else if (mouseX < ellipsePosX) {
    ellipsePosX = ellipsePosX + vitesse;
}
//test

if (mouseY > ellipsePosY) {
ellipsePosY = ellipsePosY - vitesse;
}
else if (mouseY < ellipsePosY) {
   ellipsePosY = ellipsePosY + vitesse;
}



//ellipsePosX = ellipsePosX +1;
//ellipsePosY = ellipsePosY +1;
ellipse(ellipsePosX,ellipsePosY,200);
}

