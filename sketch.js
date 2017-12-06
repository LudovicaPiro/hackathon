
var img;
var img2;
var incDono=0;



function setup() {

	// Create the canvas
	createCanvas(windowWidth, windowHeight);
    
    img=loadImage("./assets/dono-01.png");
    img2=loadImage("./assets/tree2-02.png");

	// Deal with microphone
	mic = new p5.AudioIn();
	mic.start();
}

function draw() {  
    
	//get the volume
	var volume = mic.getLevel();

	background("#f08080");
    
    var spY=map(volume,0,1,10,1000);
    if(spY>15) {  incDono+=10;
                  if(incDono>height){incDono=0}
                }

    doni(incDono);

     tree();

     for(var fila=0; fila<3; fila+=1){  if(fila==2){luci(fila+10, fila+0.9, fila);}
                                        else{luci(fila+5, fila, fila, hue);}
                                                        
                                    }

}

//if the window is resized, update the sketchs
function windowResized() {
                            resizeCanvas(windowWidth, windowHeight);
                        }

function tree() {   fill("#b3446c");
                    rect(width/2-30, height/4+120, 60,180);
                    for( var i=0; i<=60; i+=20)
                    {   
                    
                    fill("#48d1cc");
                    noStroke();
                    push();
                    translate(0,i*2);
               //     triangle(width/2-90-i*2, 250+i*2,width/2+90+i*2,250+i*2, width/2, 100)
                        triangle(width/2-90-i*2, height/4+i*2,width/2+90+i*2,height/4+i*2, width/2, height/8)
                    pop();
                    }
                }

function luci(n,spX, h) {for (var l=0; l<n; l++)
{ var volume = mic.getLevel();
    var hueLer =lerpColor(color("#fff0f5"), color("#ea0a8e"), volume*100);
    fill(hueLer);
    translate(20,0);
    ellipse(width/2-60-(spX*98),height/4+h*80,15);
                                                 
                                            }
                 }

function doni(a){   image(img, width/2+40,223*2+a-120,208/4,227/4);
                    image(img, width/2-90,223*2+a-120,208/4,227/4);
                }