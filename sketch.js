//CLASES FIGURAS MARCOS

class Circulito{

constructor (x,y,tam){
this.x =x;
this.y =y;
this.tam =tam;

}
 
pintar(){
circle(this.x, this.y, this.tam);
}
}

class Triangulito{

  constructor (x,y,x1,y1,x2,y2){
  this.x =x;
  this.y =y;
  this.x1 =x1;
  this.y1 =y1;
  this.x2 =x2;
  this.y2 =y2;
  
  
  }
   
  pintar(){
  //fill(167,145,200);
  triangle(this.x, this.y,this.x1, this.y1,this.x2, this.y2);
  }
  }

  class Rombito{

    constructor (x,y,x1,y1,x2,y2,x3,y3){
    this.x =x;
    this.y =y;
    this.x1 =x1;
    this.y1 =y1;
    this.x2 =x2;
    this.y2 =y2;
    this.x3 =x3;
    this.y3 =y3;
    
    
    }
     
    pintar(){
    //fill(167,145,200);
    quad(this.x, this.y,this.x1, this.y1,this.x2, this.y2,this.x3, this.y3);
    }
    }

    class Cuadradito{

      constructor (x,y,tam){
      this.x =x;
      this.y =y;
      this.tam =tam;
      
      
      }
       
      pintar(){
      //fill(167,145,200);
      rectMode(CENTER);
      rect(this.x, this.y,this.tam);
      }
      }

      //CLASES FIGURAS COLOR

class CirculitoColor{

  constructor (x,y,tam){
  this.x =x;
  this.y =y;
  this.tam =tam;
  
  }
   
  pintar(){
  circle(this.x, this.y, this.tam);
  }
  }
  
  class TriangulitoColor{
  
    constructor (x,y,x1,y1,x2,y2){
    this.x =x;
    this.y =y;
    this.x1 =x1;
    this.y1 =y1;
    this.x2 =x2;
    this.y2 =y2;
    
    
    }
     
    pintar(){
    //fill(167,145,200);
    triangle(this.x, this.y,this.x1, this.y1,this.x2, this.y2);
    }
    }
  
    class RombitoColor{
  
      constructor (x,y,x1,y1,x2,y2,x3,y3){
      this.x =x;
      this.y =y;
      this.x1 =x1;
      this.y1 =y1;
      this.x2 =x2;
      this.y2 =y2;
      this.x3 =x3;
      this.y3 =y3;
      
      
      }
       
      pintar(){
      //fill(167,145,200);
      quad(this.x, this.y,this.x1, this.y1,this.x2, this.y2,this.x3, this.y3);
      }
      }
  
      class CuadraditoColor{
  
        constructor (x,y,tam){
        this.x =x;
        this.y =y;
        this.tam =tam;
        
        
        }
         
        pintar(){
        //fill(167,145,200);
        rectMode(CENTER);
        rect(this.x, this.y,this.tam);
        }
        }

let miTriangulito;
let miCirculito;
let miRombito;
let miCuadradito;

let miTriangulitoColor;
let miCirculitoColor;
let miRombitoColor;
let miCuadraditoColor;

let selectCircle;
let selectTriangle; 
let selectRombo; 
let selectSquare; 

let validar;


function setup() {
  createCanvas(800,1000);

   //Figuritas Marco
  miCirculito = new Circulito(200,200,100);
  miTriangulito = new Triangulito (550,250,650,250,600,160);
  miRombito = new Rombito (200,670,150,600,200,530,250,600);
  miCuadradito = new Cuadradito (600,600,100,100);

//Figuritas Color
  miCirculitoColor =new CirculitoColor(150,880,100);
  miTriangulitoColor = new TriangulitoColor (250,920,350,920,300,830);
  miRombitoColor = new RombitoColor (450,950,400,880,450,810,500,880);
  miCuadraditoColor = new CuadraditoColor (600,875,100,100);

  
}


function draw() {
background(150);

//Figuritas Marco

//Circulito

stroke(100);
strokeWeight(5);
fill(220);
rectMode(CENTER);
rect(200,200,300,300);
stroke(20);
fill(220);
miCirculito.pintar();

//Triangulito
stroke(100);
strokeWeight(5);
fill(220);
  rectMode(CENTER);
  rect(600,200,300,300);
  stroke(20);
  fill(220);
  miTriangulito.pintar();

  //Rombito
  stroke(100);
strokeWeight(5);
fill(220);
  rectMode(CENTER);
  rect(200,600,300,300);
  stroke(20);
  miRombito.pintar();

 
  //Cuadradito
  stroke(100);
strokeWeight(5);
fill(220);
  rectMode(CENTER);
  rect(600,600,300,300);
  stroke(20);
  miCuadradito.pintar();


 
  // Figuritas Color

//Circulito
noStroke();
fill(255,155,155); 
miCirculitoColor.pintar();

//Triangulito
noStroke();
fill(199,234,70); 
miTriangulitoColor.pintar();

//Rombito
noStroke();
fill(245,217,76); 
miRombitoColor.pintar();

//Cuadradito
noStroke();
fill(198,210,240); 
rectMode(CENTER);
miCuadraditoColor.pintar();
  
}

function mousePressed() {
//Circle
if (dist(mouseX, mouseY, x, y)<25) {
  selectCircle= true;
}

/**
//Triangle
if (dist(mouseX, mouseY, x2, y2)<25) {
  select2= true; 
}
//Rombo
if (dist(mouseX, mouseY, x1, y1)<25) {
  select1= true; 
}
//Square
if (dist(mouseX, mouseY, x1, y1)<25) {
  select1= true; 

**/

function mouseDragged() {
  if (selectCircle== true)
	{
		x= mouseX;
		y=mouseY; 
		
	
	if (dist(mouseX, mouseY, 200,200)<45) {
		validar="Correcto";
	}
  }

}
}

  /** 
	if (dist(mouseX, mouseY, x5, y5)<45) {
		c5=c1;
}
	if (dist(mouseX, mouseY, x6, y6)<45) {
		c6=c1;

let selectCircle;
let selectTriangle; 
let selectRombo; 
let selectSquare; 

let validar;


//let correcto = true;


//if dist()
//if este pertenece a Triangulito && Triangulito {correcto =true
//else{correcto =false
**/
