
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000);
}

function signIn(){
  if(document.getElementById('user').value == null || document.getElementById('user').value == "" ||
  document.getElementById('pass').value == null || document.getElementById('pass').value == "")
  alert("please fill the USERNAME and PASSWORD !!");
  else{
  var userName = document.getElementById('user').value;
  var passWard = document.getElementById('pass').value;
  alert("ther userName is : "+userName+" \n the password is : "+passWard);}


}

function signUp(){
if(document.getElementById('user').value == null || document.getElementById('user').value == "" ||
  document.getElementById('pass').value == null || document.getElementById('pass').value == "")
  alert("please fill the USERNAME and PASSWORD !!");
  else{
  var userName = document.getElementById('user').value;
  var passWard = document.getElementById('pass').value;}
}


