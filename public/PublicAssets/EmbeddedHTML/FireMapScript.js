const svg = document.querySelector('svg');
let currentScale = 0.6;
let currentTranslateX = 0;
let currentTranslateY = 0;
let isPanning = false;
let startPanX, startPanY;
const plus=document.querySelector('#plus');
const minus=document.querySelector('#minus');
plus.addEventListener('click',()=>{
	currentScale +=0.5;
	updateTransform();
	console.log(currentScale);
});

minus.addEventListener('click',()=>{
	currentScale -=0.5;
	updateTransform();
	console.log(currentScale);
});

function zoom(event) {
  event.preventDefault();

  if (event.deltaY < 0) {
    // Zoom in
    currentScale += 0.2;
  } else {
    // Zoom out
    currentScale -= 0.2;
  }

  updateTransform();
}

function startPan(event) {
  isPanning = true;
  if (event.type === 'mousedown') {
    startPanX = event.clientX;
    startPanY = event.clientY;
  } else {
    startPanX = event.touches[0].clientX;
    startPanY = event.touches[0].clientY;
  }
}

function pan(event) {
	event.preventDefault();
  if (isPanning) {
    if (event.type === 'mousemove') {
      currentTranslateX += event.clientX - startPanX;
      currentTranslateY += event.clientY - startPanY;
      startPanX = event.clientX;
      startPanY = event.clientY;
    } else {
      currentTranslateX += event.touches[0].clientX - startPanX;
      currentTranslateY += event.touches[0].clientY - startPanY;
      startPanX = event.touches[0].clientX;
      startPanY = event.touches[0].clientY;
    }

    updateTransform();
  }
}

function endPan() {
  isPanning = false;
}

function updateTransform() {
  svg.style.transform = `translate(${currentTranslateX}px, ${currentTranslateY}px) scale(${currentScale})`;
}

svg.addEventListener('wheel', zoom);
svg.addEventListener('mousedown', startPan);
svg.addEventListener('mousemove', pan);
svg.addEventListener('mouseup', endPan);
svg.addEventListener('touchstart', startPan);
svg.addEventListener('touchmove', pan);
svg.addEventListener('touchend', endPan);

let circles = document.querySelectorAll('.fire');
circles.forEach(circle => {
    circle.style.fill = 'rgba(255, 0, 0, 0.55)';
    circle.style.r=0.5/currentScale+'vw';
    svg.addEventListener('wheel',()=>{
        circle.style.r=0.5/currentScale+'vw';
    });
});
