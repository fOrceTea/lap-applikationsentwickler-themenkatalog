function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function holDirEineFrage() {
  var zufallsNummer = getRandomNumber(1, 227);
  var frageID = "quest" + zufallsNummer.toString().padStart(3, 0);
  var ueberschrift = document.getElementById(frageID).querySelector('h3').innerHTML;

  document.getElementById('zubeantwortendefrage').innerHTML = ueberschrift;
  document.getElementById(frageID).querySelector('p').style.display = 'none';
  document.getElementById('antwortderfrage').innerHTML = '';
  document.getElementById('zeigeantwort').style.display = 'block';
}

function zeigeAntwort() {
  var antwortText = document.getElementById('zubeantwortendefrage').innerHTML;
  var frageID = "quest" + antwortText.trim().slice(1, 4);
  var antwortP = document.getElementById(frageID).querySelector('p');

  antwortP.style.display = 'block';

  document.getElementById('antwortderfrage').innerHTML = antwortP.innerHTML;
}

