//https://bootstrap-menu.com/detail-autohide.html

// Show and hide navbar
document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('nav');  

  if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
         if(scroll_top < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          }
          else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;
    });
  }
});

// Make jumbotron fit the page on actual phones, since 100vh doesn't work

function define(){
  let vh = document.querySelector('html').clientHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', define);
define();

// Copy the alt attribute of every image into it's title attrbiute
var images = document.getElementsByTagName('img');
Array.from(images).forEach(function(element) {
  element.setAttribute('title', element.getAttribute('alt'))
});
//except the jumbotron
document.getElementById('reverse-title').removeAttribute('title');

//Rick roll
function roll(){
  var video = document.querySelector('video');
  video.style.display = 'block';
  
  ['nav','main','footer'].forEach(function(tag) {
    document.querySelector(tag).style.display = 'none'
  }); 
  document.body.style.backgroundColor = 'black';
  
  var elem = document.documentElement;
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) { /* Safari */
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
  
  video.onplay = function(){ video.muted = !video.muted }
  video.play(); //Fuck you, microsoft edge
  document.title = "You just got rick rolled";
}