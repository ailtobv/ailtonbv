
lista=['banana', 'abacaxi', 'maça', 'pera'];

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background('#00BCD4');
  
  console.log(lista[3]);
    
  if (mouseIsPressed == true) { 
    
    circle(mouseX, mouseY, 100);
    text('CIRCULO', 150, 50);
  
  }
  
  else{
    
    fill('#FFEB3B');
    rect(mouseX,mouseY,100,100);
    text('RETANGULO', 150, 50);
  }

}