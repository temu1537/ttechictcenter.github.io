function myFunction() 
{
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function openNav() {
  document.getElementById("sidebar").style.width = "350px";
  document.getElementById("mainside").style.marginLeft="350px";
  document.getElementById("sidebar").style.display="content"
  document.getElementById("sidebar").style.transition="hidden"

}



function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("mainside").style.marginLeft="0px";
  
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
