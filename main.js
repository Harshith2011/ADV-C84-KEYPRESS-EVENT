canvas  = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

window.addEventListener("Keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyeycode;
    console.log(keyPressed);

        if((keyPressed >=97 && keyPressed<=122) (keyPressed >=65 && keyPressed<=90))
        {
            alphabetkey();
            document.getElementById("d1").innerHTML="You pressed Alphabet Key";
            console.log("alphbet key");
        }
        else{
            otherkey();
            document.getElementById("d1").innerHTML-"You pressed Symbol or Other Key";
            console.log("other key");
        
            if(keyPressed >=48 && keyPressed<=57)
        {
            numberkey();
            document.getElementById("d1").innerHTML="You pressed Number Key";
            console.log("number key");
        }
        if(keyPressed >=37 && keyPressed<=40)
        {
            arrowkey();
            document.getElementById("d1").innerHTML="You pressed Arrow key";
            console.log("arrow key");
        }
        if (keyPressed ==17){
            specialkey();
            document.getElementById("d1").innerHTML="You pressed special key";
            console.log("special key");
        }
        if (keyPressed ==18){
            specialkey();
            document.getElementById("d1").innerHTML="You pressed special key";
            console.log("special key");
        }
        if (keyPressed ==27){
            specialkey();
            document.getElementById("d1").innerHTML="You pressed special key";
            console.log("special key");
        }



}
}
function alphabetkey()
{
    img_image="download.jpg";
    add();
}

function numberkey()
{
    img_image="number.gif";
    add();
}

function arrowkey()
{
    img_image="Arrow.jpg";
    add();
}

function specialkey()
{
    img_image="special.jpg";
    add();
}

function otherkey()
{
    img_image="other.jpg";
    add();
}