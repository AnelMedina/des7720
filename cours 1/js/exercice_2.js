

let rImage;

function preload(){
rImage = loadImage("./assets/images/r.gif");


}

function setup() {
    createCanvas(rImage.width*2,rImage.height);
    background(0);
    image(rImage,0,0);
}

function draw() {
image(rImage,0,0);
fill(255,0,0)
stroke(255,0,0)
rect(mouseX,mouseY,100,100)
}

function mouseDragged() {
mousePressed();
}

function mousePressed() {
copy(rImage,mouseX,mouseY,100,100,mouseX + rImage.width,mouseY,100,100);
}

/*
Pistes d’exploration — choisissez une idée ou suivez la vôtre.

- Changez la photo pour dessiner avec une image de votre choix.
- Changez la taille du fragment que vous prélevez dans la photo. Essayez un carré de 20 × 20 pixels, puis de 100 × 100 pixels.
- Dessinez avec un GIF animé pour prélever des fragments à différents moments.
- Remplacez la photo par une vidéo et dessinez avec des fragments de cette vidéo.
- Dessinez avec des formes au clic ou au glisser.
- Ajoutez deux états au sketch : un double-clic (doubleClicked()) pourrait faire passer de la photo aux formes.
*/
