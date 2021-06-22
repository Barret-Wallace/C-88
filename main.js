var player_object ="";
var block_object ="";

var height_block=30;
var width_block=30;

var playerx = 10;
var playery = 10;

var canvas = new fabric.Canvas("canvas");

    function playerUpdate(){
        fabric.Image.fromURL("player.png", function(Img) {
            player_object = Img;
            player_object.scaleToWidth(150);
            player_object.scaleToHeight(140);   
            player_object.set({
            top:playery,
            left:playerx
            });
            canvas.add(player_object);
        
            });
    }


    function blockUpdate(Image){
        fabric.Image.fromURL(Image, function(Img){
            block_object = Img;
            block_object.scaleToWidth(width_block);
            block_object.scaleToHeight(height_block);
            player_object.set({top:playery,left:playerx});
            console.log("blockUpdate")
            canvas.add(block_object);
        });
    }
    window.addEventListener("keydown", down_key);
    function down_key(e){
        if(e.keyCode == '38'){//Up key
            key_up();
        }
        if(e.keyCode == '40'){//Down key
            key_down();
        }
        if(e.keyCode == '37'){//Left key
            key_left();
        }
        if(e.keyCode == '39'){//Right key
            key_right();
        }
        if(e.keyCode == '87'){//W key
            
        }
        if(e.keyCode == '71'){//G key

        }
        if(e.keyCode == '76'){//L key

        }
        if(e.keyCode == '84'){//T key

        }
        if(e.keyCode == '82'){//R key

        }
        if(e.keyCode == '89'){//Y key

        }
        if(e.keyCode == '68'){//D key

        }
        if(e.keyCode == '85'){//U key

        }
        if(e.keyCode == '67'){//C key

        }
        if(e.keyCode == '80'&& e.shiftKey){// Shift + P key
            height_block = height_block + 10;
            width_block = width_block + 10;
            document.getElementById("width").innerHTML=width_block;
            document.getElementById("height").innerHTML=height_block;
        }
        if(e.keyCode == '77'&& e.shiftKey){// Shift + M key
            height_block = height_block - 10;
            width_block = width_block - 10;
            document.getElementById("width").innerHTML=width_block;
            document.getElementById("height").innerHTML=height_block;
        }
    }
    function key_up(){
        if(playery >= 0){
            playery = playery - height_block;
            canvas.remove(player_object);
            console.log("key_up");
            playerUpdate();
        }
    }
    function key_down(){
        if(playery <= 500){
            playery = playery + height_block;
            canvas.remove(player_object);
            playerUpdate();
        }
    }
    function key_left(){
        if(playerx >= 0){
            playerx = playerx - width_block;
            canvas.remove(player_object);
            playerUpdate();
        }
    }
    function key_right(){
        if(playerx <= 850){
            playerx = playerx + width_block;
            canvas.remove(player_object);
            playerUpdate();
        }
    }