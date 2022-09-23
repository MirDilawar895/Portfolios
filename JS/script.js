$(document).ready(function(){

// ------------------------- color switcher starts
$(".switcher-trigger").click(function(){
  $(".switcher-wrapper").toggleClass("open");
});

$(".color-list .green button").click(function(){
  $("#switcher").attr("href","CSS/Color/green.css")
  $(".color-list li.green button").css("font-size","16px")
  $(".pink button, .blue button, .yellow button, .purple button, .orange button").css("font-size","0px")
});

$(".color-list .pink button").click(function(){
  $("#switcher").attr("href","CSS/Color/pink.css")
  $(".color-list li.pink button").css("font-size","16px")
  $(".green button, .blue button, .yellow button, .purple button, .orange button").css("font-size","0px")
});

$(".color-list .blue button").click(function(){
  $("#switcher").attr("href","CSS/Color/blue.css")
  $(".color-list li.blue button").css("font-size","16px")
  $(".green button, .pink button, .yellow button, .purple button, .orange button").css("font-size","0px")
});

$(".color-list .purple button").click(function(){
  $("#switcher").attr("href","CSS/Color/purple.css")
  $(".color-list li.purple button").css("font-size","16px")
  $(".green button, .pink button, .yellow button, .blue button, .orange button").css("font-size","0px")
});

$(".color-list .orange button").click(function(){
  $("#switcher").attr("href","CSS/Color/orange.css")
  $(".color-list li.orange button").css("font-size","16px")
  $(".green button, .pink button, .yellow button, .blue button, .purple button").css("font-size","0px")
});

$(".color-list .yellow button").click(function(){
  $("#switcher").attr("href","CSS/Color/yellow.css")
  $(".color-list li.yellow button").css("font-size","16px")
  $(".green button, .pink button, .orange button, .blue button, .purple button").css("font-size","0px")
});



// ------------------------ end of color switcher


// ------------------------ mobile-menu starts

$(".trigger").click(function(){
$(this).toggleClass("on");
if ($(".trigger").hasClass("on")) {
  $(".nav-menu").css("left","0px");
} else {  $(".nav-menu").css("left","-100%");}
});

// ------------------------ end of mobile-menu


// ------------------------ LineProgressbar starts
$('#html').LineProgressbar({
percentage:95,   
radius: '3px',
height: '10px',
duration: 6000,
backgroundColor:'#2b2a2a',  
});
$('#css').LineProgressbar({
percentage:90,   
radius: '3px',
height: '10px',
duration: 6000,
backgroundColor:'#2b2a2a',  
});
$('#java').LineProgressbar({
percentage:65,   
radius: '3px',
height: '10px',
duration: 6000,
backgroundColor:'#2b2a2a',  
});
$('#jquery').LineProgressbar({
percentage:75, 
radius: '3px',
height: '10px',
duration: 6000,
backgroundColor:'#2b2a2a',    
});
$('#wp').LineProgressbar({
percentage:95,   
radius: '3px',
height: '10px',
duration: 6000,
backgroundColor:'#2b2a2a',  
});
$('#web-des').LineProgressbar({
percentage:90,   
radius: '3px',
height: '10px',
duration: 6000,
backgroundColor:'#2b2a2a',  
});
$('#php').LineProgressbar({
percentage:65,   
radius: '3px',
height: '10px',
duration: 6000,
backgroundColor:'#2b2a2a',  
});
$('#web-dev').LineProgressbar({
percentage:75, 
radius: '3px',
height: '10px',
duration: 6000,
backgroundColor:'#2b2a2a',    
});

// ------------------------ end of LineProgressbar 


//------------------ testimonial starts

            "use strict";
            //  TESTIMONIALS CAROUSEL HOOK
            $('#customers-testimonials').owlCarousel({
                loop: true,
                center: true,
                items: 4,
                margin: 0,
                autoplay: false,
                dots:true,
                autoplayTimeout: 6000,
                smartSpeed: 1000,
                responsive: {
                  0: {
                    items: 1
                  },
                  768: {
                    items: 1
                  },
                  1170: {
                    items: 1
                  }
                }
            });
//------------------ end of testimonial



});

// ------------------------- end of ready function



//------------------portfolio gallery starts
new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
//------------------ end of portfolio gallery


//-------------------- Portfolio hover starts
      $(function() {
        $(' #grid > li ').each( function() { $(this).hoverdir(); } ); 
       });
//-------------------- end of Portfolio hover      
      function initComparisons() {
  var x, i;
  /* Find all elements with an "overlay" class: */
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /* Once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function: */
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider, img, clicked = 0, w, h;
    /* Get the width and height of the img element */
    w = img.offsetWidth;
    h = img.offsetHeight;
    /* Set the width of the img element to 50%: */
    img.style.width = (w / 2) + "px";
    /* Create slider: */
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /* Insert slider */
    img.parentElement.insertBefore(slider, img);
    /* Position the slider in the middle: */
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    /* Execute a function when the mouse button is pressed: */
    slider.addEventListener("mousedown", slideReady);
    /* And another function when the mouse button is released: */
    window.addEventListener("mouseup", slideFinish);
    /* Or touched (for touch screens: */
    slider.addEventListener("touchstart", slideReady);
     /* And released (for touch screens: */
    window.addEventListener("touchend", slideFinish);
    function slideReady(e) {
      /* Prevent any other actions that may occur when moving over the image: */
      e.preventDefault();
      /* The slider is now clicked and ready to move: */
      clicked = 1;
      /* Execute a function when the slider is moved: */
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /* The slider is no longer clicked: */
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /* If the slider is no longer clicked, exit this function: */
      if (clicked == 0) return false;
      /* Get the cursor's x position: */
      pos = getCursorPos(e)
      /* Prevent the slider from being positioned outside the image: */
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /* Execute a function that will resize the overlay image according to the cursor: */
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = (e.changedTouches) ? e.changedTouches[0] : e;
      /* Get the x positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x coordinate, relative to the image: */
      x = e.pageX - a.left;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /* Resize the image: */
      img.style.width = x + "px";
      /* Position the slider: */
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}