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

const semiprivateButton = document.getElementById('semi-private-button');

semiprivateButton.addEventListener('click', (event) => {
  window.location.href = '/Website/SEMI-PRIVATE/00_START/start.html';
});

const publicButton = document.getElementById('public-button'); 

publicButton.addEventListener('click', (event) => {
  window.location.href = '/Website/PUBLIC-DAY/start.html'
});

const semiPublicButton = document.getElementById('semi-public-button');

semiPublicButton.addEventListener('click', (event) => {
  window.location.href = '/Website/SEMI-PUBLIC/start.html'
});


const shameMagButton = document.getElementById('shame-mag-button');

shameMagButton.addEventListener('click', (event) => {
  window.open('/Website/PRIVATE/00_START/shame-mag/shame-mag.pdf', '_blank');
});

const peepoopButton = document.getElementById('peepoop-button'); 

peepoopButton.addEventListener('click', (event) => {
  window.open('/Website/PRIVATE/00_START/peepooperiod/peepooperiod.pdf', '_blank');
});



