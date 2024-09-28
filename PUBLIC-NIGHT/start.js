function openPopup(popupId) {
  document.getElementById(popupId).style.display = 'block';

  document.querySelector('.bartender-button').classList.add('no-hover');
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
};

/* public toilet */
const publicToiletButton = document.getElementById('public-toilet-button');
const closePublicToiletPopup = document.getElementById('close-public-toilet-popup');
const publicToiletPopup = document.getElementById('public-toilet-popup'); 
const publicToiletOverlay = document.getElementById('public-toilet-overlay');

publicToiletButton.addEventListener('click', (event) => {
  publicToiletPopup.classList.add('active'); 
  publicToiletOverlay.classList.add('active');
}); 

closePublicToiletPopup.addEventListener('click', (event) => {
  publicToiletPopup.classList.remove('active');
  publicToiletOverlay.classList.remove('active');
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

/* semi-public */
const semiPublicButton = document.getElementById('semi-public-button'); 

semiPublicButton.addEventListener('click', (event) => { 
  window.location.href = '../SEMI-PUBLIC/start.html';
});

/* semi-private */
const semiPrivateButton = document.getElementById('clock-button'); 

semiPrivateButton.addEventListener('click', (event) => { 
  window.location.href = '../SEMI-PRIVATE/00_START/start.html';
});

/* night */
const dayButton = document.getElementById('day-button'); 

dayButton.addEventListener('click', (event) => { 
  window.location.href = '../PUBLIC-DAY/start.html';
});
