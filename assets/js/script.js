// sticky navbar
// window.onscroll = function() {stickyNavbar()};

// var navbar = document.querySelector('#search-form');


//button link to contact page
var buttonLetsWork = document.querySelector('#lets-work-button');
var buttonGoHome = document.querySelector('#go-home-button');

var buttonLetsWorkClickHandler = function (event) {
    event.preventDefault();
    document.location='contact.html'
}

var buttonGoHomeClickHandler = function (event) {
    event.preventDefault();
    document.location='index.html'
}

buttonLetsWork.addEventListener('click', buttonLetsWorkClickHandler);

buttonGoHome.addEventListener('click', buttonGoHomeClickHandler);