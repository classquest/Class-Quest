//-------------stats------------//
var move = 0;
var hunger = 0; // 0 ~ 100
var temp = 35;
var mind = 0;

//-------------item-------------//
var inventory = 100;
var stone_axe = 1;
var cram_food = 5;
var torch = 1;

//-------------position-------------//
var xpos = 1260;
var ypos = 1200;
var ply_xpos = 20;
var ply_ypos = 20;
var mxpos = -660;
var mypos = -900;

//-------------display-------------//
var inv_vis = 0;


// TEST TREE & LAND

var x = new Array(40);


function map_array(){
  for (var a = 0; a < 40; a++) {
      x[a] = new Array(40);
	}
	for (var i = 0; i< 40; i++){
		for(var j = 0; j< 40; j++){
			x[i][j] = Math.floor((Math.random() * 5) + 1);  
        }
	}
	
	console.log(x);
}

function add_map(){

var xpos = 0;
var ypos = 0;
var map = document.getElementById("map");	

map_array();


	for (var i = 0; i< 40; i++){
	ypos = i;
	
		for(var j = 1; j<= 40; j++){
			var value = x[i][j];
			var seq = i*40 + j;
			var Idnum = "n" + seq.toString();			
			var item = document.createElement("BUTTON");
		
			item.setAttribute("id", Idnum);
			item.style.zIndex = "1";
			item.style.position = "absolute";	
			document.getElementById("map").appendChild(item);	
			xpos = j;
			item.innerHTML = item.id;
			
			if(value == 1){        		
			    var clsnum = "n" + value.toString();
				item.setAttribute("class", clsnum);
				item.style.backgroundColor = "white"; // fiX
			}
			if(value == 2){        		
				var clsnum = "n" + value.toString();
				item.setAttribute("class", clsnum);
				item.style.backgroundColor = "red"; // fix
			}
			if(value == 3){       
				var clsnum = "n" + value.toString();
				item.setAttribute("class", clsnum);			
				item.style.backgroundColor = "yellow"; // fix
			}
			if(value == 4){        		
				var clsnum = "n" + value.toString();
				item.setAttribute("class", clsnum);
				item.style.backgroundColor = "green"; // fix
			}
			if(value == 5){
				var clsnum = "n" + value.toString();
				item.setAttribute("class", clsnum);        		
				item.style.backgroundColor = "blue"; // fix
			}
			
			item.style.left = (xpos*60) +'px';
			item.style.top = (ypos*60) +'px';
        }
	}	
	
	set_position();

	x[20][20] = 0;	// player start at here
}

function set_position(){
	var map = document.getElementById("map");	
	var ply = document.getElementById("player");
	
	ply.style.position = "absolute";
    ply.style.left = 1260+'px';
    ply.style.top = 1200+'px';
    ply.style.zIndex = "2";  
	
	map.style.position = "absolute";
	map.style.top = -900+'px';
	map.style.left = -660+'px';
}
	


document.addEventListener('keydown', function(event) {
	
    if(event.keyCode == 37) { // right
		move = move+1;
        document.getElementById("move").innerHTML = move.toString();
		xpos = xpos - 60;
		mxpos = mxpos + 60;
		ply_xpos = ply_xpos - 1;
		
    }
    if(event.keyCode == 38) { // up
       move = move+1;
       document.getElementById("move").innerHTML = move.toString();
	   ypos = ypos - 60;
	   mypos = mypos + 60;
	   ply_ypos = ply_ypos - 1;
	   
    }
	if(event.keyCode == 39) { // left
        move = move+1;
        document.getElementById("move").innerHTML = move.toString();
		xpos = xpos + 60;
		mxpos = mxpos - 60;
		ply_xpos = ply_xpos + 1;
		
    }
	if(event.keyCode == 40) { //down
        move = move+1;
        document.getElementById("move").innerHTML = move.toString();
		ypos = ypos + 60;
		mypos = mypos - 60;
		ply_ypos = ply_ypos + 1;
	
    }	
	
	map_walk(mxpos,mypos);
	walk(xpos, ypos);			
	map_edit(ply_ypos, ply_xpos);

	console.log(x);
});


function map_edit(xpos, ypos){ // xpos and ypos = the exact location of player in array
	var head = "n";
	var value = (40*xpos + ypos + 1).toString();
    var idnum = head+value;
    var step = document.getElementById(idnum);	
	step.style.backgroundColor = "black"; 
	x[xpos][ypos] = 0;		
}


function map_walk(mxpos,mypos){
	var map = document.getElementById("map");
	map.style.left = mxpos+'px';
    map.style.top = mypos+'px';
}

function walk(xpos, ypos){ 
  var ply = document.getElementById("player");
  ply.style.left = xpos+'px';
  ply.style.top = ypos+'px';
  
  if(move-1 == 0){
		move = 0;
		hunger = hunger+1;
  }
  
  document.getElementById("hunger").innerHTML = hunger.toString();
  document.getElementById("temp").innerHTML = temp.toString();
}




function start(){
  var start = document.getElementById("start");
  var FRAME = document.getElementById("frame");
  
  var inv = document.getElementById("inventory"); 
  
  start.style.visibility = "hidden";

  inv.style.position = "absolute";
  inv.style.left = 750+'px';
  inv.style.top = 150+'px';
  inv.style.zIndex = "3";
  
  inv.style.visibility = 'hidden';  
}


function add_item(){
var item = document.createElement("BUTTON");
	item.innerHTML = "random";
	item.style.zIndex = "2";
	document.getElementById("inventory").appendChild(item);
}


function display(){
   var inv = document.getElementById("inventory"); 
   
   if(inv_vis == 0){
     inv.style.visibility = 'visible';
     inv_vis = 1;
   }
   else{
     inv.style.visibility = 'hidden';  
	 inv_vis = 0;
   }
}


function chop(){
	if(stone_axe == 1){
	
	}
	else{
		alert("you don't have an axe.")
	}
}

function craft(){



}

function cook(){



}

function camp(){



}

















