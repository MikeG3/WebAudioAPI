
/*
USING WEB AUDIO API TO CREATE A SOUND SYNTHESIZER

DESIGNED AND CREATED BY MICHAEL GARNER
MONTREAL 2019
*/ 

//SET UP CANVAS
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
var gridSizeX = 30;     //index i 0-29
var gridSizeY = 30;     //index i 0-29
var squareSize = 15;
var selectedSquares = [gridSizeY];  //2D grid with boolean values
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
var setUpRequired = true;


//ADD PROMPT SO THAT SOUND WORKS WITH CHROME
alert("There will be sound playing on this site 1");
alert("There will be sound playing on this site 2");
alert("There will be sound playing on this site 3");

//SOUND
var audio = new AudioContext();
var wave = audio.createOscillator();
wave.connect(audio.destination);


//RESPOND TO ARROW KEY INPUT (ASCII 37-40 for arrows)
window.addEventListener('keydown', move );
canvas.addEventListener('keydown', move );

//FUNCTIONS
function move(key) {
    if (key.keyCode == 37) {xPos = (xPos-1); if (xPos < 0) { xPos = gridSizeX-1; } }
    if (key.keyCode == 39) {xPos = (xPos+1); if (xPos == gridSizeX) { xPos = 0; } }
    if (key.keyCode == 38) {yPos = (yPos-1); if (yPos < 0) { yPos = gridSizeY-1; } }
    if (key.keyCode == 40) {yPos = (yPos+1); if (yPos == gridSizeY) { yPos = 0; } }
    //TOGGLE SELECTED SQUARE
    if (key.keyCode == 13) { selectedSquares[yPos][xPos] = !selectedSquares[yPos][xPos]; }
}//close move function

function playSound(){
     if (key.keyCode > 0) {
        
    }//close if
}//close function play sound

function setUp() {
    //PROMPT FOR CHRMOE AUDIO
    alert("AUDIO COMING!");
    wave.start();
  //CONSTRUCT AND INTIALIZE SOUND WAVES FOR ALL ROWS
  for (i = 0 ; i < gridSizeY ; i++) {
        //INITIALIZE ALL SQUARES TO FLASE, NOT SELECTED
        selectedSquares[i] = new Array(); 
        for (j = 0 ; j < gridSizeX ; j++) {
             selectedSquares[i].push(false);
         }//close for j
    }//close for i
    setUpRequired = false;
}//close setup function
                            
function animate() {
    
  //SETUP ANIMATION
  if (setUpRequired){
    setUp();
  }//close if
    
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
        c.fillStyle = '#2112fd';
    }//close else
    //COLOR SELECTED SQUARES
    if ( selectedSquares[i][j] ) {
        c.fillStyle = '#19ff70';
    }//close if
    if ( (selectedSquares[i][j] && i%2==0 && j%2==0) || (selectedSquares[i][j] &&i%2==1 && j%2==1)   ) {
        c.fillStyle = '#60dd50';
    }//close if  
    //COLOR CURRENT POSITION SQUARE
    if ( j == xPos && i == yPos ){
      c.fillStyle = '#0a1625';
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
