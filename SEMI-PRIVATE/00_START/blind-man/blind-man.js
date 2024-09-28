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

  const person = document.getElementById('person');
  const personButton = document.getElementById('person-button');
  const personBubble = document.getElementById('person-bubble');

  const toiletNoButton = document.getElementById('toilet-no');
  const toiletYesButton = document.getElementById('toilet-yes'); 
  const personSmall = document.getElementById('person-small');
  const chair = document.getElementById('chair');
  const oldLadyBoss = document.getElementById('old-lady-boss');
  const personGameoverPopup = document.getElementById('person-gameover-popup');


  let currentTextIndex = 0; 
  const texts = [text00, text01, text02, text03, text04, text05, text06];

  rightButton.addEventListener('click', (event) => {
    if (currentTextIndex < texts.length -1) {
      texts[currentTextIndex].classList.add('hidden');
      currentTextIndex++;
      texts[currentTextIndex].classList.remove('hidden');
    }

    if (currentTextIndex === 1) {
      personBubble.classList.remove('hidden');
      personButton.classList.add('person-button-disabled');
      rightButton.classList.add('arrow-right-disabled');
    } else {
      rightButton.classList.remove('arrow-right-disabled');
    }

    if (currentTextIndex === 3) {
      redirectToDifferentPage();
    }
  });

  leftButton.addEventListener('click', (event) => {
    if (currentTextIndex > 0) {
      texts[currentTextIndex].classList.add('hidden');
      currentTextIndex--;
      texts[currentTextIndex].classList.remove('hidden');
    }

    if (currentTextIndex === 1) {
      rightButton.classList.add('arrow-right-disabled');
    } else {
      rightButton.classList.remove('arrow-right-disabled');
    }
  });

  personButton.addEventListener ('click', (event) => {
    personBubble.classList.remove('hidden');
    personButton.classList.add('person-button-disabled');
  });

  const pfyrButton = window.parent.document.getElementById('pfyr-button');
  const museumButton = window.parent.document.getElementById('semi-public-button');
  const clockButton = window.parent.document.getElementById('clock-button');
  const privateButton = window.parent.document.getElementById('private-button');
  const conferenceButton = window.parent.document.getElementById('conference-button');
  const mountainsButton = window.parent.document.getElementById('public-button');

  toiletNoButton.addEventListener('click', (event) =>  {
    personGameoverPopup.classList.remove('hidden');
    pfyrButton.classList.add('hidden');
    museumButton.classList.add('hidden');
    clockButton.classList.add('hidden');
    privateButton.classList.add('hidden');
    conferenceButton.classList.add('hidden');
    mountainsButton.classList.add('hidden');
  });


  toiletYesButton.addEventListener('click', (event) => {
  texts[1].classList.add('hidden');
  texts[2].classList.remove('hidden');
  currentTextIndex = 2;
  personSmall.classList.remove('hidden');
  rightButton.classList.remove('arrow-right-disabled');
  person.classList.add('hidden');
});

function redirectToDifferentPage() {
  const iframe = window.parent.document.getElementById('bartenderIframe'); 
  if (iframe) {
    iframe.src = '../two-friends/two-friends.html';
  }
}

function continueGame() {
  const iframe = window.parent.document.getElementById('bartenderIframe'); 
  if (iframe) {
    iframe.src = '../two-friends/two-friends.html';
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
