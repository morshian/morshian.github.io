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