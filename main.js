const title = document.querySelector('.title');

window.addEventListener("pointerdown", (e) => {

  const bellSound = document.createElement("audio");
  bellSound.src = "sound/bubbles.mp3";
  document.body.append(bellSound);

  const drop = document.createElement("div");
  drop.classList.add("drop");
  document.body.append(drop);
  const color = `rgb(${getRandomInt(0, 250)}, ${getRandomInt(0, 250)}, ${getRandomInt(0, 250)})`;

  drop.style.cssText = `
    left: ${e.pageX - drop.offsetWidth / 2}px;
    top: ${e.pageY - drop.offsetHeight / 2}px;
    background-color: ${color}
   `;
   title.style.color = color;
  playSound(bellSound);
});

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function playSound(sound) {
  sound.play();
  sound.currentTime = 0;
}


 //  left: ${e.pageX - drop.getBoundingClientRect().width / 2}px;
  //  top: ${e.pageY - drop.getBoundingClientRect().height / 2}px;