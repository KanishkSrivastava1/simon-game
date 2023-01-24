var order = [] ;
var inputorder = [];
var level =0;

$("body").keypress(nextlevel);
    
$("div .btn").click(function(event) {
    var tgt = event.target.id;
    pressnsound(tgt,event.target);
    check(tgt);
})


function reset(){
    order = [] ;
    inputorder = [];
    level =0;
    $("#level-title").text("Press A Key to Start");
}

function check(tgt){
    var i  = inputorder.length;
    if(tgt == order[i]){
        // console.log("well done");
        inputorder.push(tgt);
        if(i+1 == order.length){
            // console.log("congo, level " +level +" comp");
            inputorder=[];
             setTimeout(nextlevel,1000);
        }
    }else{
        $("#level-title").text("Game Over");
         $("body").addClass("game-over");
        var s = "sounds/wrong.mp3";
        var a = new Audio(s);
        a.play();
        setTimeout(function(){
            $("body").removeClass("game-over");
            reset();
        },3000);
        
        return;
    }

}

function nextlevel(){
    level++;
     $("#level-title").text("Level " + level);
    var tgt = generator();
    var src = "div #"+tgt;
    pressnsound(tgt,src);
}

function sound(e){
    var loc = "sounds/"+e+".mp3";
    var a = new Audio(loc);
    a.play();
}

function pressnsound(tgt,src){
    $(src).addClass("pressed");
    sound(tgt);
    setTimeout(function(){
    $(src).removeClass("pressed");
    },200);
}
function generator(){
    var val = Math.floor(Math.random()*4);
    var bt;
    if(val == 0){
         bt = "green";
    }else if(val == 1){
         bt = "red";
    }else if(val == 2){
         bt = "yellow";
    }else{
         bt = "blue";
    }
    order.push(bt);
    // console.log(order);
    return bt;
}