kleur='white';

function setup() {
  var myCanvas = createCanvas(451,451);
  myCanvas.parent('processing');
  background('coral');
}

function draw() {
  for (var rij = 0;rij < 450;rij += 50) {
    for (var kolom = 0;kolom < 450;kolom += 50) {
      fill(kleur);
      rect(kolom,rij,50,50);
    }
  }
}