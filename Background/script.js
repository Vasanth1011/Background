var imgbox=document.querySelector(".imgbox");
var imgwrap=document.querySelector(".imgwrap");
var original=document.getElementById("original");
var line=document.getElementById("line");

original.style.width=imgbox.offsetWidth+"px";

var leftspace=imgbox.offsetLeft;

imgbox.onmousemove=function(e){
  var boxwidth=(e.pageX-leftspace)+"px";
  imgwrap.style.width=boxwidth;
  line.style.left=boxwidth;
}