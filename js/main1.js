//hearder
var oone = document.getElementById("one");
var str="";
for(var i=1;i<3;i++){
    str += "<img src=images/One"+i+".jpg>";
}
oone.innerHTML = str;


var odt = document.getElementById("sdt")
var odd = document.getElementById("sdd")
odt.onmouseover = function(){
	odt.style.background = "white";
	odd.style.display = "block";
}
odt.onmouseout = function(){
	odt.style.background = "#f7f7f7";
	odd.style.display = "";
}

var onav = document.getElementById("nav");
var oul = onav.querySelectorAll("ul");
var ali = document.querySelectorAll("#nav>ul>li");

for(var i=0;i<ali.length;i++){
	ali[i].onmouseover = function(){
		this.children[0].className = "oa";

	}
}
for(var i=0;i<ali.length;i++){
	ali[i].onmouseout = function(){
		this.children[0].className = "";

	}
}