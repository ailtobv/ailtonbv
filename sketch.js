
lista=['banana', 'abacaxi', 'maça', 'pera'];

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  
  console.log(lista[3]);
  
  
  if (mouseIsPressed == true) { 
    
    circle(mouseX, mouseY, 100);
  
  }
  else{
    fill('#2196F3')
    rect(mouseX,mouseY,100,100)
  }

}