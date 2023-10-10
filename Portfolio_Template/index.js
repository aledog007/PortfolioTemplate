// For a better scroll on the site 
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('body,html').animate({
      scrollTop: $(hash).offset().top
      }, 1200, function(){
      window.location.hash = hash;
     });
     } 
    });
});

var width = $(window).width(); 

//animated background 
window.onscroll = function(){
if ((width >= 900)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#middle").css("background-size","150% auto");
    }else{
        $("#middle").css("background-size","100% auto");        
    }
}
};

//Loadingscreen 
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1450);

//onclick close Navbar
function closeNavbar() {
  document.getElementById("menu-icon").checked = false;
}

// for progressbar
const htmlProgressBar = document.getElementById('html-progress');
const cssProgressBar = document.getElementById('css-progress');
const bootstrapProgressBar = document.getElementById('bootstrap-progress');
const javascriptProgressBar = document.getElementById('javascript-progress');
const javaProgressBar = document.getElementById('java-progress');
const cProgressBar = document.getElementById('c#-progress');


htmlProgressBar.style.width = '80%'; 
cssProgressBar.style.width = '60%';  
bootstrapProgressBar.style.width = '45%';
javascriptProgressBar.style.width = '20%';  
javaProgressBar.style.width = '15%';  
cProgressBar.style.width = '5%';  