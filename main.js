var canvas = new fabric.Canvas("myCanvas");
rocketX = 5;
rocketY = 5;
covidX = 500;
covidY = 300;

block_height = 5;
block_width = 5;
rocket_present = 0;

corona_obj = "";
rocket_obj = "";

function load_img(){
    fabric.Image.fromURL("CoronavirusCell.png", function(Img){
        corona_obj = Img;
        corona_obj.scaleToWidth(50);
        corona_obj.scaleToHeight(50);
        corona_obj.set({
            top: covidY,
            left: covidX
        });
        canvas.add(corona_obj);
    });
    new_image();
}

function new_image(){
    fabric.Image.fromURL("Syringe.webp", function(Img){
        rocket_obj = Img;
        rocket_obj.scaleToWidth(50);
        rocket_obj.scaleToHeight(50);
        rocket_obj.set({
            top: rocketY,
            left: rocketX
        });
        canvas.add(rocket_obj);
        if(rocketX + rocketY == covidX + covidY){
            canvas.remove(corona_obj);
            covidX = Math.floor(Math.round(Math.random() * 501)/10) * 10;
            covidY = Math.floor(Math.round(Math.random() * 301)/10) * 10;
            corona_obj.set({
                top: covidY,
                left: covidX
            });
            canvas.add(corona_obj);
        }
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    
    if(keyPressed == "37"){
        left();
        console.log("Left");
    }

    if(keyPressed == "38"){
        up();
        console.log("Up");
    }

    if(keyPressed == "39"){
        right();
        console.log("Right");
    }

    if(keyPressed == "40"){
        down();
        console.log("Down");
    }
}

function left(){
    if(rocketX >=5){
        rocketX = rocketX - 10;
        console.log("RocketX = " + rocketX + "and RocketY = " + rocketY);
        canvas.remove(rocket_obj);
        new_image();
    }
}

function up(){
    if(rocketY >=5){
        rocketY = rocketY - 10;
        console.log("RocketX = " + rocketX + "and RocketY = " + rocketY);
        canvas.remove(rocket_obj);
        new_image();
    }
}

function right(){
    if(rocketX <=595){
        rocketX = rocketX + 10;
        console.log("RocketX = " + rocketX + "and RocketY = " + rocketY);
        canvas.remove(rocket_obj);
        new_image();
    }
}

function down(){
    if(rocketY <=395){
        rocketY = rocketY + 10;
        console.log("RocketX = " + rocketX + "and RocketY = " + rocketY);
        canvas.remove(rocket_obj);
        new_image();
    }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("explaination").innerHTML;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}