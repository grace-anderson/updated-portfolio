

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
var contactPageLink = document.querySelector("#contact-page-link");
var buttonGoToProjects = document.querySelector("#go-to-projects-button");
var buttonDownloadResume = document.querySelector('#download-resume');

var buttonLetsWorkClickHandler = function (event) {
  event.preventDefault();
  document.location = "contact.html";
};

var buttonGoHomeClickHandler = function (event) {
  event.preventDefault();
  document.location = "index.html";
};

var buttonGoToProjectsClickHandler = function (event) {
  event.preventDefault();
  document.location = "index.html#project-anchor";
}

var buttonDownloadResumeEventHandler = function (event) {
  document.location = "./assets/docs/HelenAnderson_CV_developer_20220414.pdf"
}

// direct each event to its function
if (buttonLetsWork) {
  buttonLetsWork.addEventListener("click", buttonLetsWorkClickHandler);
}

if (contactPageLink) {
    contactPageLink.addEventListener("click", buttonLetsWorkClickHandler);
  }

if (buttonGoHome) {
  buttonGoHome.addEventListener("click", buttonGoHomeClickHandler);
}

if (buttonGoToProjects) {
  buttonGoToProjects.addEventListener("click", buttonGoToProjectsClickHandler)
}

if (buttonDownloadResume) {
  buttonDownloadResume.addEventListener("click", buttonDownloadResumeEventHandler)
}
