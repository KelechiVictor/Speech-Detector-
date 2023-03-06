window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  const cornScript = transcript.replace(/corn|asiwaju|ewa|tinubu/gi, '🌽');
  p.textContent = cornScript;

  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }

});

/*** Initialising of Clear Button ***/
document.querySelector('.btn').addEventListener('click', () => {
  document.querySelector('.words').innerHTML = "";
});

/*** Calling the recognition Function**/
recognition.addEventListener('end', recognition.start);

recognition.start();