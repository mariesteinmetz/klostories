document.addEventListener('DOMContentLoaded', (event) => {
  const rightButton = document.getElementById('arrow-right');
  const leftButton = document.getElementById('arrow-left');
  const text00 = document.getElementById('text-00');
  const text01 = document.getElementById('text-01');
  const text02 = document.getElementById('text-02');
  const text03 = document.getElementById('text-03');
  const text04 = document.getElementById('text-04');
  const text05 = document.getElementById('text-05');
  const text06 = document.getElementById('text-06');
  const text07 = document.getElementById('text-07');

  const oldLady = document.getElementById('old-lady');
  const oldLadyButton = document.getElementById('old-lady-button');
  const oldLadyBubble = document.getElementById('old-lady-bubble');

  const oldLadyNoButton = document.getElementById('old-lady-no');
  const oldLadyYesButton = document.getElementById('old-lady-yes'); 
  const oldLadySmall = document.getElementById('old-lady-small');
  const chair = document.getElementById('chair');
  const oldLadyBoss = document.getElementById('old-lady-boss');
  const oldLadyGameoverPopup = document.getElementById('old-lady-gameover-popup');


  let currentTextIndex = 0; 
  const texts = [text00, text01, text02, text03, text04, text05, text06];

  rightButton.addEventListener('click', (event) => {
    if (currentTextIndex < texts.length -1) {
      texts[currentTextIndex].classList.add('hidden');
      currentTextIndex++;
      texts[currentTextIndex].classList.remove('hidden');
    }

    if (currentTextIndex === 2) {
      oldLady.classList.remove('hidden');
    }

    if (currentTextIndex === 3) {
      oldLadyBubble.classList.remove('hidden');
      oldLadyButton.classList.add('old-lady-button-disabled');
      rightButton.classList.add('arrow-right-disabled');
    } else {
      rightButton.classList.remove('arrow-right-disabled');
    }

    if (currentTextIndex === 5) {
      oldLadyBoss.classList.remove('hidden');
      oldLadySmall.classList.add('hidden');
      chair.classList.add('hidden');
    }

    if (currentTextIndex === 6) {
      redirectToDifferentPage();
    }
  });

  leftButton.addEventListener('click', (event) => {
    if (currentTextIndex > 0) {
      texts[currentTextIndex].classList.add('hidden');
      currentTextIndex--;
      texts[currentTextIndex].classList.remove('hidden');
    }

    if (currentTextIndex === 0) {
      redirectToOldPage();
    }

    if (currentTextIndex === 3) {
      rightButton.classList.add('arrow-right-disabled'); 
    } else {
      rightButton.classList.remove('arrow-right-disabled');
    }
  });

  oldLadyButton.addEventListener ('click', (event) => {
    oldLadyBubble.classList.remove('hidden');
    oldLadyButton.classList.add('old-lady-button-disabled');
  });

  const pfyrButton = window.parent.document.getElementById('pfyr-button');
  const museumButton = window.parent.document.getElementById('semi-public-button');
  const clockButton = window.parent.document.getElementById('clock-button');
  const privateButton = window.parent.document.getElementById('private-button');
  const conferenceButton = window.parent.document.getElementById('conference-button');
  const mountainsButton = window.parent.document.getElementById('public-button');

  oldLadyNoButton.addEventListener('click', (event) =>  {
    oldLadyGameoverPopup.classList.remove('hidden');
    pfyrButton.classList.add('hidden');
    museumButton.classList.add('hidden');
    clockButton.classList.add('hidden');
    privateButton.classList.add('hidden');
    conferenceButton.classList.add('hidden');
    mountainsButton.classList.add('hidden');
  });


  oldLadyYesButton.addEventListener('click', (event) => {
  texts[3].classList.add('hidden');
  texts[4].classList.remove('hidden');
  currentTextIndex = 4;
  oldLadySmall.classList.remove('hidden');
  chair.classList.remove('hidden');
  oldLady.classList.add('hidden');
  rightButton.classList.remove('arrow-right-disabled');
});

function redirectToDifferentPage() {
  const iframe = window.parent.document.getElementById('bartenderIframe'); 
  if (iframe) {
    iframe.src = '../blind-man/blind-man.html';
  }
}

function redirectToOldPage() {
  const iframe = window.parent.document.getElementById('bartenderIframe');
  if (iframe) {
    iframe.src = 'overlay.html'
  }
}

function continueGame() {
  const iframe = window.parent.document.getElementById('bartenderIframe'); 
  if (iframe) {
    iframe.src = '../blind-man/blind-man.html';
  }

  const popup = document.getElementById('old-lady-gameover-popup');
  if (popup) {
    popup.classList.add('hidden');
  }
}

window.addEventListener('message', (event) => {
  if (event.data === 'continueGame') {
    continueGame();
    pfyrButton.classList.remove('hidden');
    museumButton.classList.remove('hidden');
    clockButton.classList.remove('hidden');
    privateButton.classList.remove('hidden');
    conferenceButton.classList.remove('hidden');
    mountainsButton.classList.remove('hidden');
  }
});

});
