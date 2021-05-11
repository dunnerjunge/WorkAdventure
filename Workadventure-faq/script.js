const textarray = [
		"Gepriesen sei Pixelbaum!",
		"Seid gegrüßt, holder User!",
		"Wie ist das werte Befinden?",
		"Ihr Antlitz ist von überragender Schönheit.",
		"Ich walte meines Amtes mit Insistenz.",
		"Versucht unbedingt die Spielereien.",
		"Man nennt mich namenloser Held",
		"und Christian ist mein Meister!",
		"Er ist wahrlich ein Virtuose.",
		"Ich leiste ihm ausgezeichnete Dienste.",
		"Bitte halten Sie die Direktiven ein."
		];
const length = textarray.length;
var i = 0;

document.getElementById("randtext").innerHTML = textarray[0];

function RndText() {
	var text = "";
	i = i < length-1 ? i+1 : 0;
	for (var j = 0; j < textarray[i].length; j++){
	setTimeout(function(j) {    
    text = text+textarray[i].charAt(j);
	document.getElementById("randtext").innerHTML = text;
  },j * 25, j);
}	
}

setInterval(function(){ RndText(); }, 6000);


function showBlog(x) {
var xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function() {
	if (this.readyState==4 && this.status==200) {
		document.getElementById("blogdynamiccontent").innerHTML=this.responseText;
		showOverlay();
	}
}
xmlhttp.open("GET","functions/blog.php?blog="+x,true);
xmlhttp.send();
}

function showOverlay(){
var opas = 0;
var id = setInterval(frame, 1);

function frame() {
    if (opas == 100) {
      clearInterval(id);
	  document.getElementById("overlay").style.display = "flex";
	  document.getElementById("html").style.overflowY = "hidden";
    } else {
      opas += 5; 
      document.getElementById("overlay").style.opacity = opas * 0.01; 
    }
}	
}

function hide(x){
var	x = x.id;
var opas = 100;
var id = setInterval(frame, 1);

function frame() {
    if (opas == 0) {
      clearInterval(id);
	  document.getElementById(x).style.display = "none";
	  document.getElementById("html").style.overflowY = "scroll";
    } else {
      opas -= 5; 
      document.getElementById(x).style.opacity = opas * 0.01; 
    }
}
}