let personagem
let grama

const tamanho = 64

let andarX = 0
let andarY = 0

const velocidade = 64

let botao

function setup() {
  createCanvas(576, 576);
  personagem = loadImage('person.png')
  grama = loadImage('grass.png')
}

function draw() {
  background(220);
  
  for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
      image(grama, tamanho*i, tamanho*j, tamanho, tamanho)
    }
  }
  
  image(personagem, andarX, andarY, tamanho, tamanho)
  
  if(andarX === 512 && andarY === 512){
    rect(160, 160, 256, 256)
    textSize(35)
    text('Ganhou', 200, 300)
    
    botao = createButton('Reiniciar')
    
    botao.mousePressed(reset)
    
    noLoop()
  }
}

function reset() {
  andarX = 0
  andarY = 0
  botao.remove()
  loop()
}

function keyPressed() {
  if(keyIsDown(DOWN_ARROW) && andarY < 512){
     andarY += velocidade
  }
  
  if(keyIsDown(UP_ARROW) && andarY > 0){
     andarY -= velocidade
  }
  
  if(keyIsDown(RIGHT_ARROW) && andarX < 512){
     andarX += velocidade
  }
  
  if(keyIsDown(LEFT_ARROW) && andarX > 0){
     andarX -= velocidade
  }
}







