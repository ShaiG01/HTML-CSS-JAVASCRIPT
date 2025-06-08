  const textInput = document.querySelector('.text');
  const speed = document.querySelector('.number');
  const play = document.querySelector('.play');
  const pause = document.querySelector('.pause');
  const stop = document.querySelector('.stop');

  let utterance;

  play.addEventListener('click', () => {
    if (speechSynthesis.paused && speechSynthesis.speaking) {
      speechSynthesis.resume();
    } else {
      playText(textInput.value);
    }
  });

  pause.addEventListener('click', () => {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause();
    }
  });

  stop.addEventListener('click', () => {
    speechSynthesis.cancel();
    textInput.disabled = false;
    speed.disabled = false;
  });



  function playText(text) {
    speechSynthesis.cancel(); // Stop anything currently speaking
    utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = parseFloat(speed.value) || 1;
    textInput.disabled = true;
    speed.disabled=true;

    utterance.addEventListener('end', () => {
      textInput.disabled = false;
      speed.disabled=false;
    });

    speechSynthesis.speak(utterance);
  }
