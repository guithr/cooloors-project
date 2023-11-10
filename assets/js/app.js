//Global selections and variables
const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll(".color h2");
let initialColors;

// FUNCTIONS

// Color Generator
function generateHex() {
  /*
  This code is Vanilla js, but we will use the library ChromaJs 
  const letters = "#012345689ABCDEF";
  let hash = "#";
  for (let i = 0; i < 6; i++) {
    hash += letters[Math.floor(Math.random() * 16)];
  }
  return hash;
  */

  // This code is ChromaJs library
  const hexColor = chroma.random();
  return hexColor;
}

// Random Colors
function randomColors() {
  colorDivs.forEach((div, index) => {
    const hexText = div.children[0];
    const randomColor = generateHex();

    // Add the color to the bg .color
    div.style.backgroundColor = randomColor;
    hexText.innerText = randomColor;
    // Check for contrast
    checkTextContrast(randomColor, hexText);
  });
}
function checkTextContrast(color, text) {
  const luminance = chroma(color).luminance();
  if (luminance > 0.5) {
    text.style.color = "rgb(10, 10, 10)";
  } else {
    text.style.color = "rgb(240, 240, 240)";
  }
}
randomColors();
