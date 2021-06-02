var canvas=new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;
body_img_width = 30;
body_img_height = 30;
var player_object = "";
var img_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_img(get_img) {
    fabric.Image.fromURL(get_img, function (Img) {
        img_object = Img;
        img_object.scaleToWidth(body_img_width);
        img_object.scaleToHeight(body_img_height);
        img_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(img_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '77') {
        console.log("pressed shift key and m");
        body_img_width = body_img_width + 10;
        body_img_height = body_img_height + 10;
        document.getElementById("current_width").innerHTML = body_img_width;
        document.getElementById("current_height").innerHTML = body_img_height;
    }

    if (e.shiftKey == true && keyPressed == '88') {
        console.log("pressed shift key and x");
        body_img_width = body_img_width - 10;
        body_img_height = body_img_height - 10;
        document.getElementById("current_width").innerHTML = body_img_width;
        document.getElementById("current_height").innerHTML = body_img_height;
    }

    if (keyPressed == '37') {
        left();
        console.log("pressed left key");
    }

    if (keyPressed == '38') {
        up();
        console.log("pressed up key");
    }

    if (keyPressed == '39') {
        right();
        console.log("pressed right key");
    }

    if (keyPressed == '40') {
        down();
        console.log("pressed down key");
    }

    if (keyPressed == '67') {
        new_img("caphand.png");
        console.log("pressed c");
    }

    if (keyPressed == '72') {
        new_img("hulkbody.png");
        console.log("pressed h");
    }

    if (keyPressed == '73') {
        new_img("ironlegs.png");
        console.log("pressed i");
    }

    if (keyPressed == '83') {
        new_img("spidermanface.png");
        console.log("pressed s");
    }

    if (keyPressed == '84') {
        new_img("thorhand.png");
        console.log("pressed t");
    }
}

function up() {
    if (player_y > 0) {
        player_y = player_y - body_img_height;
        console.log("when up key is pressed x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <500) {
        player_y = player_y + body_img_height;
        console.log("when down key is pressed x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x > 0) {
        player_x = player_x - body_img_width;
        console.log("when left key is pressed x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x < 900) {
        player_x = player_x + body_img_width;
        console.log("when right key is pressed x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}