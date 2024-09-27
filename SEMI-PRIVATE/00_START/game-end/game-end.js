document.addEventListener('DOMContentLoaded', (event) => {
  const rightButton = document.getElementById('arrow-right');
  const leftButton = document.getElementById('arrow-left');
  const text00 = document.getElementById('text-00');
  const text01 = document.getElementById('text-01');
  const text02 = document.getElementById('text-02');
  const text03 = document.getElementById('text-03');

  let currentTextIndex = 0; 
  const texts = [text00, text01, text02, text03];

  rightButton.addEventListener('click', (event) => {
    if (currentTextIndex < texts.length -1) {
      texts[currentTextIndex].classList.add('hidden');
      currentTextIndex++;
      texts[currentTextIndex].classList.remove('hidden');
    }

    if (currentTextIndex === 3) {
      rightButton.classList.add('arrow-right-disabled');
    } else {
      rightButton.classList.remove('arrow-right-disabled');
    }

  });

  leftButton.addEventListener('click', (event) => {
    if (currentTextIndex > 0) {
      texts[currentTextIndex].classList.add('hidden');
      currentTextIndex--;
      texts[currentTextIndex].classList.remove('hidden');
    }

    if (currentTextIndex === 3) {
      rightButton.classList.add('arrow-right-disabled');
    } else {
      rightButton.classList.remove('arrow-right-disabled');
    }

  });
});
