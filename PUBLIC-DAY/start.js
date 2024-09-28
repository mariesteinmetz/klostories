function openPopup(popupId) {
  document.getElementById(popupId).style.display = 'block';

  document.querySelector('.bartender-button').classList.add('no-hover');
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
};

/* vespasienne */
const vespasienneButton = document.getElementById('vespasienne-button');
const closeVespasiennePopup = document.getElementById('close-vespasienne-popup');
const vespasiennePopup = document.getElementById('vespasienne-popup'); 
const vespasienneOverlay = document.getElementById('vespasienne-overlay');

vespasienneButton.addEventListener('click', (event) => {
  vespasiennePopup.classList.add('active'); 
  vespasienneOverlay.classList.add('active');
}); 

closeVespasiennePopup.addEventListener('click', (event) => {
  vespasiennePopup.classList.remove('active');
  vespasienneOverlay.classList.remove('active');
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
const nightButton = document.getElementById('night-button'); 

nightButton.addEventListener('click', (event) => { 
  window.location.href = '../PUBLIC-NIGHT/start.html';
});
