const zeroButton = document.getElementById('0-btn');
const oneButton = document.getElementById('1-btn');
const twoButton = document.getElementById('2-btn')
const threeButton = document.getElementById('3-btn');
const fourButton = document.getElementById('4-btn')
const fwContainer = document.getElementById('fw-container');
const fw = document.getElementById('fw');
const exitScreen = document.getElementById('exitscreen');
zeroButton.classList.add('hide');

const mediaDoubleF = new Image(200,200);
mediaDoubleF.src = 'img/mediadbl.png';
	
let x;
let y;
let num = 0;
zeroButton.addEventListener('click', funvtionc);
oneButton.addEventListener('click', funvtionc);
fourButton.classList.add('hide');

function funvtionc() {
  oneButton.classList.add('hide');
  twoButton.classList.add('hide'); 
  x = 0; //[[[*array*]]].sort(() => Math.random() - .5);
  y = 0;
  fwContainer.classList.remove('hide');
}

function showFramework(fw) {
  fw.innerHTML = "<img src=" + bgimage.src + " />";
}

function exitScreen() {
  fwContainer.classList.add('hide');
  exitScreen.classList.remove('hide');
  exitScreen.innerHTML = `
      <h2><font color="ffffff"><center><button onclick="home()">Home</button><form><button type="submit" formaction="https://www.github.com/sixie6e">GitHub</button></form></center></h2>`;
}

function home() {
  exitScreen.classList.add('hide');
  num = 0;
  x = 0; //[[[*array*]]].sort(() => Math.random() - .5);
  y = 0;
  funvtionc();
}
