window.addEventListener('pointerdown', (e) => {
  const drop = document.createElement('div');
   drop.classList.add('drop');
   document.body.append(drop)
   
   drop.style.cssText = 
   `
    left: ${e.pageX - drop.getBoundingClientRect().width / 2}px;
   top: ${e.pageY - drop.getBoundingClientRect().height / 2}px;
    background-color: rgb(
     ${getRandomInt(0,250)},
     ${getRandomInt(0,250)},
     ${getRandomInt(0,250)}
    );
   `
 })
 
 function getRandomInt(min,max) {
   return Math.round(Math.random() * (max - min) + min);
 }