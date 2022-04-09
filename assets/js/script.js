// sticky navbar
// window.onscroll = function() {stickyNavbar()};

// var navbar = document.querySelector('#search-form');

//page transition 
window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})

//button links between home and contact pages
var buttonLetsWork = document.querySelector("#lets-work-button");
var buttonGoHome = document.querySelector("#go-home-button");

var buttonLetsWorkClickHandler = function (event) {
  event.preventDefault();
  document.location = "contact.html";
};

var buttonGoHomeClickHandler = function (event) {
  event.preventDefault();
  document.location = "index.html";
};

if (buttonLetsWork) {
  buttonLetsWork.addEventListener("click", buttonLetsWorkClickHandler);
}

if (buttonGoHome) {
  buttonGoHome.addEventListener("click", buttonGoHomeClickHandler);
}
