var Worm1
var BG
var Food
var KiwiI,BerryI,PineI,PeachI,AppleI
var WormI1
var E1
var E1i
var SG
var Ground
var live=3
var Gs="play"


function preload(){

BG=loadImage("B1.jpg")
KiwiI=loadImage("Kiwi.png")
BerryI=loadImage("Cherries.png.png")
PineI=loadImage("Pineapple.png")
PeachI=loadImage("Peach.png")
AppleI=loadImage("Apple.png")
WormI1=loadImage("YWorm.png")
E1i=loadImage("EnemyS1.png")


}


function setup(){
createCanvas(displayWidth,displayHeight-150)
B=createSprite(displayWidth/2,displayHeight/2-100,displayWidth,displayHeight)
B.addImage(BG)
B.scale=4
B.velocityX=-5
Worm1=createSprite(200,displayHeight-300,50,50)
Worm1.addImage(WormI1)
Worm1.scale=.7
SG=new Group()
Ground=createSprite(200,displayHeight-200,100,20)
Ground.visible=false









}

function draw(){

	if(Gs==="play"){





	
if(B.x<displayWidth/2-200){
B.x=displayWidth/2+100

}
if(keyDown("space")){
Worm1.velocityY=-12




}


Worm1.velocityY=Worm1.velocityY+0.8
spawnFood()
spawnSnake()
if(SG.isTouching(Worm1)){
	Gs="end"
	live=live-1
	
	
	
	}
	}
	if(Gs==="end"){
B.velocityX=0
Worm1.velocityY=0
SG.setVelocityYEach(0)




	}
drawSprites()
fill("white")
textSize(50)
text("Life:"+live,1770,50) 
Worm1.collide(Ground)
}

function spawnFood(){
	if(frameCount%100==0){
		Food=createSprite(Math.round(random(100,2000)),Math.round(random(100,1000)),50,50)
		var I=Math.round(random(1,5))
		Food.scale=.2
		if(I===1){
Food.addImage(KiwiI)


		}
		else if(I===2){
		Food.addImage(PeachI)

		}

		else if(I===3){
			Food.addImage(AppleI)
	
			}

			else if(I===4){
				Food.addImage(PineI)
		
				}
				else{
Food.addImage(BerryI)



				}



				


	



	
		Food.shapeColor="Black"
Food.lifetime=75

	}





}

function spawnSnake(){
	if(frameCount%75===0){
		E1=createSprite(Math.round(random(100,2000)),Math.round(random(100,1000)),20,20)
		E1.addImage(E1i)
		E1.scale=.2
		var I=Math.round(random(1,2))
		if(I===1){
E1.velocityY=-4


		}
		else{
		E1.velocityY=4
		}

		SG.add(E1)
	}
	
	
	
	

	



































}