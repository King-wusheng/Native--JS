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


var olunbo = document.getElementById("lunbo");
var str = "";
for(var i=1;i<6;i++){
	str += "<img src=images/lb"+i+".jpg>"
}
olunbo.innerHTML = str;


var osubnav = document.getElementById("subnav");
var othrnav = document.getElementById("thrnav");
var oli = document.querySelectorAll("#subnav>li");
for(var i=0;i<oli.length;i++){
	oli[i].onmouseover = function(){
		this.children[0].style.border= "1px solid #ccc";
		this.children[0].children[0].style.color = "#019dd8";
		this.children[1].style.display = "block";
	}
	oli[i].onmouseout = function(){
		this.children[0].style.borderColor = "white";
		this.children[0].children[0].style.color = "black";
		this.children[1].style.display = "none";
	}
}




var othrnav = document.getElementById("thrnav");
var oli = document.querySelectorAll("#thrnav>li>a");
for(var i=0;i<oli.length;i++){
	oli[i].onmouseover = function(){
		this.style.color = "#019dd8";
		this.style.textDecoration = "underline";
	}
	oli[i].onmouseout = function(){
		this.style.color = "black";

		this.style.textDecoration = "none";
	}
}

var olb = document.getElementById("lb");
var olb1 = document.getElementById("lb1")
olb.onmouseover = function(){
	this.children[0].children[2].style.opacity = "0.8";
    this.children[0].children[3].style.opacity = "0.8";
}

olb.onmouseout = function(){
	this.children[0].children[2].style.opacity = "0";
    this.children[0].children[3].style.opacity = "0";
	
}


