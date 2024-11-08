let img1;
let img2;
let img3;
let img4
let img5
let particles1 = [];
let particles2 = [];
let particles3 = [];
let particles4 = [];
let partSize1 = 30; // Particle size (Group 1)
let partSize2 = 25; // Particle size (Group 2)
let partSize3 = 10; //  Particle size (Group 3)
let bgColor; // background colour
let c1, c2, c3;//Gradient colors
let colorRate = 1; //Color interpolation rate


function preload() {
  img1 = loadImage('Assests/sky1.png'); //Original Sky image
  img2 = loadImage('Assests/water1.png'); //Original water image
  img3 = loadImage('Assests/house.png'); //Original house image
  img4 = loadImage('Assests/skyBg.png')// image for night (sky)
  img5=  loadImage('Assests/lakeBg.png') //image for night(lake)
  img6= loadImage('Assests/houseBlue.png') //image for night(house)
}
//Set up the canvas and initialize particles
function setup() {
  createCanvas(windowWidth, windowHeight);

  createParticle(); 

}
//Create particles
function createParticle() {
  particles1 = [];
  particles2 = [];
  particles3 = [];
  particles4 = [];
  //sky turn to night
  let imgCopy1 = img1.get()
  imgCopy1.resize(width, height)
  let imgCopy4 = img4.get()
  imgCopy4.resize(width, height)
  for (let x = 0; x < imgCopy1.width; x += partSize1) {
    for (let y = 0; y < imgCopy1.height; y += partSize1) {
      let c = imgCopy1.get(x, y);
      let col2 = imgCopy4.get(x,y)
      if (brightness(color(c)) > 0) {
        if(brightness(color(col2)) > 0){
          particles1.push(new Particle(x, y, c, partSize1, partSize1,col2))
        }else{
          particles1.push(new Particle(x, y, c, partSize1, partSize1,color(0,0,0)))
        }
      }
    }
  }
//lake turn to night
  let imgCopy2 = img2.get()
  imgCopy2.resize(width, height)
  let imgCopy5 = img5.get()
  imgCopy5.resize(width, height)
  for (let x = 0; x < imgCopy2.width; x += partSize2) {
    for (let y = 0; y < imgCopy2.height; y += partSize2) {
      let c = imgCopy2.get(x, y);
      let c3 = imgCopy5.get(x, y);
      if (brightness(color(c)) > 0) {
        particles2.push(new Particle(x, y, c, partSize2 * 2, partSize2 * 0.8,c3))
        
      }
    }
  }

  //house turn to night
  let imgCopy3 = img3.get()
  imgCopy3.resize(width, height)
  let imgCopy6 = img6.get()
  imgCopy6.resize(width, height)
  for (let x = 0; x < imgCopy3.width; x += partSize3) {
    for (let y = 0; y < imgCopy3.height; y += partSize3) {
      let c = imgCopy3.get(x, y);
      let c4 = imgCopy6.get(x, y);
      if (brightness(color(c)) > 0) {
        particles3.push(new Particle(x, y, c, partSize3 * 2, partSize3 * 2,c4))
      }
    }
  }
}
//Resize canvas and particles on window resize
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  createParticle();//Recreate particles
}

function draw() {
  colorRate = (1+sin(frameCount*0.01-PI/2))/2
  if(frameCount*0.01-PI/2>2*PI){
    colorRate=0;
     console.log(frameCount*0.01-PI/2)
  }
  background(0);
  //Create gradient background
  c1 = color(126, 164, 255) //Top color
  c2 = color(255, 178, 68) //Middle colour
  c3 = color(144, 183, 255) //Bottom colour
  for (let y = 0; y < height * 0.5; y += 1) {
    let c = lerpColor(c1, c2, map(y, 0, height * 0.5, 0, 1))
    stroke(c)
    strokeWeight(1)
    line(0, y, width, y)
  } 
  
  for (let y = height * 0.5; y < height; y += 1) {
    let c = lerpColor(c2, c3, map(y, height * 0.5, height, 0, 1))
    stroke(c)
    strokeWeight(1)
    line(0, y, width, y)
  }

  for (let i = 0; i < particles1.length; i++) {
    particles1[i].update()
    particles1[i].display()
  }
  for (let i = 0; i < particles3.length; i++) {
    particles3[i].update()
    particles3[i].display()
  }
  for (let i = 0; i < particles2.length; i++) {
    particles2[i].update()
    particles2[i].displayLine()
  }

}

class Particle {
  constructor(x, y, col, w, h,col2) {
    this.x = x; //Particle X position
    this.y = y; //Particle Y position
    this.col = col; //Particle colour
    this.w = w;//Particle width
    this.h = h;//Particle height
    this.col2=col2;//Particle target color
    this.currentCol=col; //Particle current color

  }
 //Display particle
  display() {
    noStroke()
    fill(this.currentCol)
    ellipse(this.x, this.y, this.w, this.h)
  }

  //Display particles with sinusoidal wave
  displayLine() {
    noStroke()
    fill(this.currentCol)
   
    ellipse(this.x, this.y + sin(this.x * 0.01 + this.y * 0.0 + frameCount * 0.0) * partSize2 * 0.5, this.w, this.h)
  
  }
  //Update particle color
  update() {
    let c1 = color(red(this.col),green(this.col),blue(this.col))
    let c2 = color(red(this.col2),green(this.col2),blue(this.col2))
    this.currentCol = lerpColor(c1,c2,colorRate)
  }
}