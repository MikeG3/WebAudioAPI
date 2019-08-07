
/*
ABANDONED, SEE P5 REPOSITORY
*/

//canvas can now be called by this variable
var canvas = document.querySelector('canvas');

//set canvas height and width
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;
var windowWidth = window.innerWidth - 10;
var windowHeight = window.innerHeight - 10;

//Gives canvas API 2d drawing functions
var c = canvas.getContext('2d');

//GLOBAL VARIABLES
var frameCounter = 0;
var i = 0;
var j = 0;
var xPos = 4;
var yPos = 8;
var gridSizeX = 30;
var gridSizeY = 30;
var squareSize = 15;
var aSquareR = 0;
var aSquareG = 0;
var aSquareB = 0;
var aSquareA = 0.5;
var bSquareR = 0;
var bSquareG = 0;
var bSquareB = 0;
var bSquareA = 0.5;
var grayColor = 0;
var incrementing = true;

//SOUND
var audio = new AudioContext();
var wave = audio.createOscillator();

/*
soundWave = new P5.Oscillator();
soundWave.setType('sine');
soundWave.start();
soundWave.amp(0.5);
soundWave.frequency(220);
*/

//RESPOND TO ARROW KEY INPUT (ASCII 37-40 for arrows)
window.addEventListener('keydown', move );
canvas.addEventListener('keydown', move );
window.addEventListener('keydown', playSound );

//FUNCTIONS
function move(key) {
    if (key.keyCode == 37) {xPos = (xPos-1); if (xPos < 0) { xPos = gridSizeX-1; } }
    if (key.keyCode == 39) {xPos = (xPos+1); if (xPos == gridSizeX) { xPos = 0; } }
    if (key.keyCode == 38) {yPos = (yPos-1); if (yPos < 0) { yPos = gridSizeY-1; } }
    if (key.keyCode == 40) {yPos = (yPos+1); if (yPos == gridSizeY) { yPos = 0; } }
}//close move function

function playSound(){
     if (key.keyCode > 0) {
        
    }//close if
}//close function play sound
                            
function animate() {
  
  //LOCAL VARIABLES 
  
 //CHECKERED BOARD
for (i = 0 ; i < gridSizeY ; i++ ){
  for (j = 0 ; j < gridSizeX  ; j++) { 

    //UPDATE COLORS
    aSquareR += 5;
    aSquareR %= 255;
    aSquareG += 25;
    aSquareG %= 255;
    aSquareB += 15;
    aSquareB %= 255;
    bSquareR += 3;
    bSquareR %= 255;
    bSquareG += 2;
    bSquareG %= 255;
    bSquareB += 6;
    bSquareB %= 255;
    
    //UPDATE FILLSTYLE AFTER COLOR IS SELECTED
    if ( (i%2 == 0 && j%2 ==0) || (i%2 == 1 && j%2 == 1)  ) {
      c.fillStyle = 'pink';
    }//close if
    else {
        c.fillStyle = 'blue';
    }
    
    //COLOR SELECTED SQUARE
    if ( j == xPos && i == yPos ){
      c.fillStyle = '#001625';
    }//close if selected position square
      
    //DRAW EACH RECTANGLE IN THE LOOPS
    c.fillRect(j*squareSize , i*squareSize , squareSize, squareSize);  
  }//close inner for loop
}//close outter for loop
 
//TEXT

//ANIMATE
frameCounter++;
requestAnimationFrame(animate);
//output to console
console.log(canvas);
};//CLOSE ANIMATION FUNCTION DEFINTION

animate();
