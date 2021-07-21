class Raquete{
  
  constructor(){
    
    this.posx = 0;
    this.posy = 0;
    this.largura = 0;
    this.altura = 0;
    
    this.cor = "";
    
  }
  
  display(){
    
    fill(this.cor);
    rect(this.posx, this.posy, this.largura, this.altura);  
    
  }
  
  
  
}