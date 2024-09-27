function openPopup(popupId) {
  document.getElementById(popupId).style.display = 'block';

  document.querySelector('.bartender-button').classList.add('no-hover');
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
};

/* disability sign */
const disabilitySignButton = document.getElementById('disability-sign-button');
const closeDisabilitySignPopup = document.getElementById('close-disability-sign-popup');
const disabilitySignPopup = document.getElementById('disability-sign-popup'); 
const disabilitySignOverlay = document.getElementById('disability-sign-overlay');

disabilitySignButton.addEventListener('click', (event) => {
  disabilitySignPopup.classList.add('active'); 
  disabilitySignOverlay.classList.add('active');
}); 

closeDisabilitySignPopup.addEventListener('click', (event) => {
  disabilitySignPopup.classList.remove('active');
  disabilitySignOverlay.classList.remove('active');
});

/* imprint */
const imprintButton = document.getElementById('imprint-button');
const closeImprintPopup = document.getElementById('close-imprint-popup');
const imprintPopup = document.getElementById('imprint-popup'); 
const imprintOverlay = document.getElementById('imprint-overlay'); 

imprintButton.addEventListener('click', (event) => {
  imprintPopup.classList.add('active'); 
  imprintOverlay.classList.add('active');
});

closeImprintPopup.addEventListener('click', (event) => {
  imprintPopup.classList.remove('active');
  imprintOverlay.classList.remove('active');
});


/* about */
const homeButton = document.getElementById('home-button');
const closeHomePopup = document.getElementById('close-home-popup');
const homePopup = document.getElementById('home-popup'); 
const homeOverlay = document.getElementById('home-overlay'); 

homeButton.addEventListener('click', (event) => {
  homePopup.classList.add('active'); 
  homeOverlay.classList.add('active');
});

closeHomePopup.addEventListener('click', (event) => {
  homePopup.classList.remove('active');
  homeOverlay.classList.remove('active');
});

//* private */
const privateButton = document.getElementById('private-button'); 

privateButton.addEventListener('click', (event) => {window.location.href = 'PRIVATE/start.html';
});

/* public-day */
const publicDayButton = document.getElementById('public-day-button'); 
const publicDayButton2 = document.getElementById('public-day-button-2'); 
const publicDayButton3 = document.getElementById('public-day-button-3'); 
const publicDayButton4 = document.getElementById('public-day-button-4'); 

publicDayButton.addEventListener('click', (event) => { 
  window.location.href = 'PUBLIC-DAY/start.html';
});
publicDayButton2.addEventListener('click', (event) => { 
  window.location.href = 'PUBLIC-DAY/start.html';
});
publicDayButton3.addEventListener('click', (event) => { 
  window.location.href = 'PUBLIC-DAY/start.html';
});
publicDayButton4.addEventListener('click', (event) => { 
  window.location.href = 'PUBLIC-DAY/start.html';
});

/* semi-private */
const semiPrivateButton = document.getElementById('semi-private-button'); 
const semiPrivateButton2 = document.getElementById('semi-private-button-2'); 
const semiPrivateButton3 = document.getElementById('semi-private-button-3'); 

semiPrivateButton.addEventListener('click', (event) => { 
  window.location.href = 'SEMI-PRIVATE/00_START/start.html';
});
semiPrivateButton2.addEventListener('click', (event) => { 
  window.location.href = 'SEMI-PRIVATE/00_START/start.html';
});
semiPrivateButton3.addEventListener('click', (event) => { 
  window.location.href = 'SEMI-PRIVATE/00_START/start.html';
});

/* semi-public */
const semiPublicButton = document.getElementById('semi-public-button'); 
const semiPublicButton2 = document.getElementById('semi-public-button-2'); 
const semiPublicButton3 = document.getElementById('semi-public-button-3'); 
const semiPublicButton4 = document.getElementById('semi-public-button-4'); 
const semiPublicButton5 = document.getElementById('semi-public-button-5'); 

semiPublicButton.addEventListener('click', (event) => { 
  window.location.href = 'SEMI-PUBLIC/start.html';
});
semiPublicButton2.addEventListener('click', (event) => { 
  window.location.href = 'SEMI-PUBLIC/start.html';
});
semiPublicButton3.addEventListener('click', (event) => { 
  window.location.href = 'SEMI-PUBLIC/start.html';
});
semiPublicButton4.addEventListener('click', (event) => { 
  window.location.href = 'SEMI-PUBLIC/start.html';
});
semiPublicButton5.addEventListener('click', (event) => { 
  window.location.href = 'SEMI-PUBLIC/start.html';
});

/* public-night */
const publicNightButton = document.getElementById('public-night-button'); 
const publicNightButton2 = document.getElementById('public-night-button-2'); 

publicNightButton.addEventListener('click', (event) => { 
  window.location.href = 'PUBLIC-NIGHT/start.html';
});
publicNightButton2.addEventListener('click', (event) => { 
  window.location.href = 'PUBLIC-NIGHT/start.html';
});







