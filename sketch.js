var RaqueteJogador;
var RaqueteComputador;

var BolaSaltitante;

var bola = 200;
var ball = 200;


function setup() {
  createCanvas(400, 400);
  
  RaqueteJogador = new Raquete();
  RaqueteComputador = new Raquete();
  
  BolaSaltitante = new Bola();
}

function draw() {
  bola = bola+2;
  ball = ball-2;
  
  
  background("violet");

  
  RaqueteJogador.posx = 390;
  RaqueteJogador.posy = mouseY;
  RaqueteJogador.largura = 10;
  RaqueteJogador.altura = 70;
  RaqueteJogador.cor = "pink";
  
  RaqueteJogador.display();
  
  RaqueteComputador.posx = 0;
  RaqueteComputador.posy = 200;
  RaqueteComputador.largura = 10;
  RaqueteComputador.altura = 70;
  RaqueteComputador.cor ="cyan";
  
  RaqueteComputador.display();
  
  BolaSaltitante.posx = bola;
  BolaSaltitante.posy = ball;
  BolaSaltitante.largura = 10;
  BolaSaltitante.altura = 10;
  BolaSaltitante.cor = "yellow";
  
  BolaSaltitante.display();

}