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
});

minus.addEventListener('click',()=>{
	currentScale -=0.5;
	updateTransform();
});

function zoom(event) {
  event.preventDefault();

  if (event.deltaY < 0) {
    // Zoom in
    currentScale *= 1.1;
  } else {
    // Zoom out
    currentScale *= 0.9;
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
    circle.style.r=20/currentScale+'px';
    svg.addEventListener('wheel',()=>{
        circle.style.r=20/currentScale+'px';
    });
    plus.addEventListener('click',()=>{
        circle.style.r=20/currentScale+'px';
    });
    
    minus.addEventListener('click',()=>{
        circle.style.r=20/currentScale+'px';
    });
});

let locations=document.querySelectorAll('.st3');
locations.forEach((location)=>{
  location.addEventListener('click',()=>{
    let locationbox=document.querySelector('#'+location.id+'-box');
    if(locationbox.classList.contains('none')) {
      locationbox.classList.remove('none');
      locationbox.querySelector('.exit').onclick=function () {
        locationbox.classList.add('none');
      }
    }

  });
});

let ChartData=[
  {
    id:1,
    temperature:25,
    humidity:88,
    timestamp: "2023-07-18T16:58:59.096Z"
  },
  {
    id:2,
    temperature:24,
    humidity:68,
    timestamp: "2023-07-18T17:58:59.096Z"
  },
  {
    id:3,
    temperature:26,
    humidity:80,
    timestamp: "2023-07-18T18:58:59.096Z"
  },
  {
    id:4,
    temperature:26,
    humidity:85,
    timestamp: "2023-07-18T19:58:59.096Z"
  },
  {
    id:5,
    temperature:28,
    humidity:75,
    timestamp: "2023-07-18T20:58:59.096Z"
  }
];
var data = {
  labels: ChartData.reduce((curr,col) => {
    return curr.concat(col.timestamp.substring(11, 13));
}, []),
  datasets: [{
    label: "Nhiệt độ",
    backgroundColor: "rgba(255,99,132,0.2)",
    borderColor: "rgba(255,99,132,1)",
    borderWidth: 2,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgba(255,99,132,1)",
    data: ChartData.reduce((curr,col) => {
      return curr.concat(col.temperature);
  }, [])
  }]
};

var options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      stacked: true,
      grid: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  }
};

new Chart('son-tra-1-chart', {
  type: 'bar',
  options: options,
  data: data
});
