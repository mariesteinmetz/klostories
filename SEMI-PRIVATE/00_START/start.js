function openPopup(popupId) {
  document.getElementById(popupId).style.display = 'block';

  document.querySelector('.bartender-button').classList.add('no-hover');
}

function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
};


const PfyrButton = document.getElementById('pfyr-button');
const closePfyrPopup = document.getElementById('close-pfyr-popup');
const pfyrPopup = document.getElementById('pfyr-popup'); 
const pfyrOverlay = document.getElementById('pfyr-overlay');

PfyrButton.addEventListener('click', (event) => {
  pfyrPopup.classList.add('active'); 
  pfyrOverlay.classList.add('active');
}); 

closePfyrPopup.addEventListener('click', (event) => {
  pfyrPopup.classList.remove('active');
  pfyrOverlay.classList.remove('active');
});



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

const conferenceButton = document.getElementById('conference-button');
const closeConferencePopup = document.getElementById('close-conference-popup');
const conferencePopup = document.getElementById('conference-popup');
const conferenceOverlay = document.getElementById('conference-overlay');

conferenceButton.addEventListener('click', (event) => {
  conferencePopup.classList.add('active');
  conferenceOverlay.classList.add('active');
});

closeConferencePopup.addEventListener('click', (event) => {
  conferencePopup.classList.remove('active');
  conferenceOverlay.classList.remove('active');
});


const privateButton = document.getElementById('private-button'); 

privateButton.addEventListener('click', (event) => { 
  window.location.href = '../PRIVATE/start.html';
});


const semiPrivateButton = document.getElementById('semi-public-button'); 

semiPrivateButton.addEventListener('click', (event) => {
  window.location.href = '../SEMI-PUBLIC/start.html';
});

const publicButton = document.getElementById('public-button'); 
publicButton.addEventListener('click', (event) => {
  window.location.href = '../PUBLIC-DAY/start.html';
});

