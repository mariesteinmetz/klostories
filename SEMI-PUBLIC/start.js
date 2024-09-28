function openPopup(popupId) {
  document.getElementById(popupId).style.display = 'block';

  document.querySelector('.bartender-button').classList.add('no-hover');
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
};

/* toilet signs */
const toiletSignsButton = document.getElementById('toilet-signs-button');
const closeToiletSignsPopup = document.getElementById('close-toilet-signs-popup');
const toiletSignsPopup = document.getElementById('toilet-signs-popup'); 
const toiletSignsOverlay = document.getElementById('toilet-signs-overlay');

toiletSignsButton.addEventListener('click', (event) => {
  toiletSignsPopup.classList.add('active'); 
  toiletSignsOverlay.classList.add('active');
}); 

closeToiletSignsPopup.addEventListener('click', (event) => {
  toiletSignsPopup.classList.remove('active');
  toiletSignsOverlay.classList.remove('active');
});

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

/* disability door */
const doorDisabilityButton = document.getElementById('door-disability-button');

doorDisabilityButton.addEventListener('click', (event) => {
  window.open('disabled_toilet.pdf', '_target');
}); 



/* women door */
const doorWomenButton = document.getElementById('door-women-button');

doorWomenButton.addEventListener('click', (event) => {
  window.open('sisterhood-comic.pdf', '_blank');
});


/* men door */
const doorMenButton = document.getElementById('door-men-button');
const closeDoorMenPopup = document.getElementById('close-door-men-popup');
const doorMenPopup = document.getElementById('door-men-popup'); 
const doorMenOverlay = document.getElementById('door-men-overlay');

doorMenButton.addEventListener('click', (event) => {
  doorMenPopup.classList.add('active'); 
  doorMenOverlay.classList.add('active');
}); 

closeDoorMenPopup.addEventListener('click', (event) => {
  doorMenPopup.classList.remove('active');
  doorMenOverlay.classList.remove('active');
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

/* private */
const privateButton = document.getElementById('private-button'); 

privateButton.addEventListener('click', (event) => { 
  window.location.href = '../PRIVATE/start.html';
});

/* public */
const publicButton = document.getElementById('public-button'); 

publicButton.addEventListener('click', (event) => { 
  window.location.href = '../PUBLIC-DAY/start.html';
});

/* semi-private */
const semiPrivateButton = document.getElementById('semi-private-button'); 

semiPrivateButton.addEventListener('click', (event) => { 
  window.location.href = '../SEMI-PRIVATE/00_START/start.html';
});
