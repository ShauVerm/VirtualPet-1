var dogImage;

var happyDogImage;

var database;

var foodS;

var foodStock;

var database;

function preload(){
dogImage = loadImage("images/dog.png"); 
happyDogImage = loadImage("images/dogHappy.png");
}

function setup() {
createCanvas(500, 500);

database = firebase.database();

//.ref() refers to the value which we are looking for
foodStock = database.ref('Food');
//.on() will listen to the changes in Food
foodStock.on("value",readStock);

dog = createSprite(250,250,40,60);
dog.addImage (dogImage);
dog.scale = 0.5;
}

function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStocks(foodS);  
  dog.addImage(happyDogImage);
}
drawSprites();
fill("black");
textSize = 10;
stroke("black");
text("Note: Press UP_ARROW key to feed your Pet", 175, 50);

text("Food Remaining : " + foodS, 50, 100);
}

function readStock(data){
  foodS = data.val();  
}

function writeStocks(x){

if(x<=0){
    x = 0;
}else{
  x = x-1;  
}    

database.ref('/').update({
Food:x  
})
}