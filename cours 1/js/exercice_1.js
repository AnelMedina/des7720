// DES7720 — EXERCICE 1 — Introduction à p5.js

// Charger les fichiers avant de commencer.
function preload() {
}

// Préparer le sketch une seule fois.
function setup() {

createCanvas (640,640)

rectMode (CENTER);

}





// Dessiner en boucle. Ici on dessine (60 images par seconde)
function draw() {

background (mouseX,255,50);
rect (mouseX,mouseY,mouseY,100);
}
