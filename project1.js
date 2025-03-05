

let greenMine;
let mine;
let desert;
let finish;
let explosion;
let explosionSound;
let defuseSound; 
let victory;
let helper;
let win;
let safeZonesSelected = [false, false, false, false, false];
let bgSound;
let clappingSound;
let airhornSound;

var mode;

function preload() {
  greenMine = loadImage ('assets/greenbomb.png');
  mine = loadImage('assets/250px-H4-UNSC-Landmine-Front.webp');
  finish = loadImage('assets/pngtree-finish-line-black-and-white-checkered-seamless-vector-transparent-png-image_9067602.png');
  desert = loadImage('assets/617857.jpg');
  explosion = loadImage('assets/istockphoto-955124060-612x612.jpg');
  victory = loadImage('assets/victory.png');
  helper = loadImage('assets/halohelper.png');
  win = loadImage('assets/transparent-fortnite-blue-and-white-victory-royale-sign-number-1660f4057e259d7.62874088.webp');
  soundFormats('mp3');
  explosionSound = loadSound('assets/Explosion sound effect - bomb sound - boom sound.mp3');
  defuseSound = loadSound('assets/CSGO Defuse sound effect_cut.mp3');
  bgSound = loadSound('assets/Halo Theme Song Originalpoop.mp3');
  clappingSound = loadSound('assets/Queen - We are the champions (Chorus only).mp3');
  airhornSound = loadSound('assets/DJ Airhorn Sound Effect 001.mp3')
}





function setup() {

  mode = 0;
  createCanvas(800, 1000);
  //desertbackdrop

image (desert,0,0)

if (mode==1) {
  // bgSound.playMode()
} 



}
function keyPressed() {
  if ( mode===0 || mode===8 && keyCode === ENTER) {
    bgSound.play();
  }
  if (mode===8 && keyCode === ENTER){
    clappingSound.stop();
      airhornSound.stop();
  }

  if ((mode === 7 || mode === 8 || mode===0) && keyCode === ENTER) {
    mode=1;
     
    safeZonesSelected = [false, false, false, false, false];  
  }

  
  
}

function mouseClicked() {
 
  
  if (mode===1 || mode===2 || mode==3 || mode===4 || mode===5 || mode===6) {
  //explosion
  if ((mouseX > 300 && mouseX < 1000 && mouseY > 850) ||
        (mouseX < 250 && mouseX > 100 && mouseY < 800 && mouseY > 670) ||
        (mouseX > 550 && mouseX < 670 && mouseY < 800 && mouseY > 670) ||
        (mouseX > 300 && mouseY > 550 && mouseY < 620) ||
        (mouseX < 465 && mouseY > 320 && mouseY < 450) ||
        (mouseX < 465 && mouseY < 250 && mouseY > 150)) {
      explosionSound.play();
      
      mode = 7;
      
  }

 
 
  // safe zones
  if (mouseX < 300 && mouseX > 150 && mouseY > 850) {
    mode = 2;
    defuseSound.play();
    safeZonesSelected[0] = true;
  } else if (mouseX < 450 && mouseX > 300 && mouseY < 850 && mouseY > 650) {
    mode = 3;
    defuseSound.play();
    safeZonesSelected[1] = true;
  } else if (mouseX < 260 && mouseX > 100 && mouseY < 650 && mouseY > 450) {
    mode = 4;
    defuseSound.play();
    safeZonesSelected[2] = true;
  } else if (mouseX < 650 && mouseX > 550 && mouseY > 320 && mouseY < 450) {
    mode = 5;
    defuseSound.play();
    safeZonesSelected[3] = true;
  } else if (mouseX < 650 && mouseX > 550 && mouseY > 190 && mouseY < 320) {
    mode = 6;
    safeZonesSelected[4] = true;
    defuseSound.play();
  }
  

    
    if (safeZonesSelected.every(Boolean)) {
      mode = 8;
      bgSound.stop();
      clappingSound.play();
      airhornSound.play();
    }
}
} 

function draw() {


  if (mode==0) {
scale(1)
    image (desert,0,0);
    scale(.5);
 startMenu();
    
  }
if (mode===1) {
  clear();
  image (desert,0,0);
  scale(.5);
mines();
finishLine();
image (helper,-850,200);





}
if (mode===2) {
  clear();
  image (desert,0,0);
  scale(.5);
  minesFirstRow();
  scale(2)
  
  finishLine(); 
}
if (mode===3) {
  
  scale(.5);
  
  minesSecondRow(); 
  
}
if (mode===4) {
  
  scale(.5);
  minesThirdRow(); 
}
if (mode===5) {
  
  scale(.5);
  minesFourthRow(); 
}
if (mode===6) {
  
  scale(.5);
  minesFifthRow(); 
  
}

if (mode===7) {
  clear();
  deathScene();
}
if (mode===8) {
  clear();
victoryScene();

}
}
function music(){
  bgSound.play; 
}


function deathScene() {

 scale(3)
 image (explosion,-180,-10)
 scale(1);
 fill(0,200,0,95);
 rect (50,220,150,50);
 fill('yellow');
textSize (50);
text ('You Died!',20,100);
fill('white');
textSize (10);
text ('Press Enter to Play Again',72,250);


}

function victoryScene() {

  image (victory,-550,0)
  //image (win,-200,0)
  scale(3);
  textSize (30);
  fill('red')
  text ('YOU SURVIVED!',17,120);
  fill(0,200,0,90);
  rect (60,150,150,50);
 fill('white');
 textSize (10);
 text ('Press Enter to Play Again',75,180);
 
 
 }









function startMenu() {
  scale(2);
  fill(0,200,0,90)
rect (100,200,600,550)
  fill('yellow');
textSize (50);
text ('AVOID THE LANDMINES!',110,300);
fill('white');
textSize (25)
text ('There is only one safe mine per row, ',200,420)
text ('starting from the bottom identify the safe route ',140,470);
text (' and make your way to the finish line',200,520);
fill('red');
text (' A MINE FROM EACH ROW',240,570);
text (' MUST BE GREEN TO WIN',240,620)
fill('white')
textSize(50)
text ('Press Enter to Continue', 140,700)


}
function finishLine() {
  scale(.5)
  image (finish,880,-300);
}
function mines() {
  //
  //scale(.5);
  image (mine, 220,300);
  image (mine, 220,650);
  image (mine, 220,1000);
  image (mine, 220,1350);
  image (mine, 220,1700);
  image (mine, 1100,300);
  image (mine, 1100,650);
  image (mine, 1100,1000);
  image (mine, 1100,1350);
  image (mine, 1100,1700);
  image (mine, 660,300);
  image (mine, 660,650);
  image (mine, 660,1000);
  image (mine, 660,1350);
  image (mine, 660,1700);

}
function minesFirstRow() {
  //
  //scale(.5);
  
  image (mine, 220,300);
  image (mine, 220,650);
  image (mine, 220,1000);
  image (mine, 220,1350);
  image (mine, 1100,300);
  image (mine, 1100,650);
  image (mine, 1100,1000);
  image (mine, 1100,1350);
  image (mine, 1100,1700);
  image (mine, 660,300);
  image (mine, 660,650);
  image (mine, 660,1000);
  image (mine, 660,1350);
  image (mine, 660,1700);
  scale(.5);
  image (greenMine, 440,3400);

}
function minesSecondRow() {
 
  
  image (mine, 220,300);
  image (mine, 220,650);
  image (mine, 220,1000);
  image (mine, 220,1350);
  image (mine, 1100,300);
  image (mine, 1100,650);
  image (mine, 1100,1000);
  image (mine, 1100,1350);
  image (mine, 1100,1700);
  image (mine, 660,300);
  image (mine, 660,650);
  image (mine, 660,1000);
  image (mine, 660,1350);
  image (mine, 660,1700);
  scale(.5);
  image (greenMine, 1320,2700)

}
function minesThirdRow() {
 
  
  image (mine, 220,300);
  image (mine, 220,650);
  

  image (mine, 1100,300);
  image (mine, 1100,650);
  image (mine, 1100,1000);
  image (mine, 1100,1350);
  image (mine, 1100,1700);
  image (mine, 660,300);
  image (mine, 660,650);
  image (mine, 660,1000);

  image (mine, 660,1700);
  scale(.5);
  
  image (greenMine, 440,2000);
  

}
function minesFourthRow() {
 
  
  image (mine, 220,300);
  image (mine, 220,650);

  image (mine, 220,1350);
  image (mine, 1100,300);
  image (mine, 1100,650);
  image (mine, 1100,1000);
  image (mine, 1100,1700);
  image (mine, 660,300);
  image (mine, 660,650);
  image (mine, 660,1000);
  
  image (mine, 660,1700);
  scale(.5);

  image (greenMine, 2200,1300);

}
function minesFifthRow() {
 
  
  image (mine, 220,300);
  image (mine, 220,650);
  image (mine, 220,1350);
  image (mine, 1100,1000);
  image (mine, 1100,1700);
  image (mine, 660,300);
  image (mine, 660,650);
  image (mine, 660,1000);
  image (mine, 660,1700);
  scale(.5);

  image (greenMine, 2200,600);

}





  
