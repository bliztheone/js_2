localStorage.getItem(`${window.location.href}assessment`);
var assessmentButton = document.querySelector(".header__assessment-button");
var assessmentInput = document.querySelector(".header__assessment-value");
if (localStorage[`${window.location.href}assessment`]) {
assessmentInput.value = localStorage[`${window.location.href}assessment`]
}

function getAssessment() {  
  console.log(assessmentInput.value)
  localStorage[`${window.location.href}assessment`] = assessmentInput.value;
  assessmentInput = localStorage[`${window.location.href}assessment`];
};

assessmentButton.addEventListener("click", getAssessment);