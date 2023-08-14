const svg = document.querySelector('svg');
let currentScale = 0.6;
let currentTranslateX = 0;
let currentTranslateY = 0;
let isPanning = false;
let startPanX, startPanY;
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
let BachMa_isBurning = 0;
let SonTra_isBurning = 0;
let circles;
const handleMinus=() => {
  circle.style.r = 20 / currentScale + 'px';
}
const handlePlus=() => {
  circle.style.r = 20 / currentScale + 'px';
}
const handleWheel=() => {
  circle.style.r = 20 / currentScale + 'px';
}
setInterval(() => {
  fetch('http://localhost:8080/api/sensors')
    .then((response) => response.json())
    .then((result) => {
      if (result.temperature > 50 || result.humidity < 40) {
        SonTra_isBurning = 1
      }
      else {
        SonTra_isBurning = 0
      }
      let Sensors = [document.querySelector('#son-tra-1')];
      if (SonTra_isBurning) {
        Sensors[0].classList.add('fire');
      }
      else {
        Sensors[0].classList.remove('fire')
      }
      if(!Sensors[0].classList.contains('fire')) {
        svg.removeEventListener('wheel',handleWheel);
      plus.removeEventListener('click',handlePlus);
      minus.removeEventListener('click',handleMinus);
        Sensors[0].style.fill = '#048743';
        Sensors[0].style.r = 1+'px';
      
      }
      
      circles = document.querySelectorAll('.fire');
      circles.forEach(circle => {
        circle.style.fill = 'rgba(255, 0, 0, 0.55)';
        circle.style.r = 20 / currentScale + 'px';
        svg.addEventListener('wheel', handleWheel);
        plus.addEventListener('click', handlePlus);

        minus.addEventListener('click', handleMinus);
      });
      return SonTra_isBurning
    })
}, 1000);


plus.onclick= () => {
  currentScale += 0.5;
  updateTransform();
};

minus.onclick= () => {
  currentScale -= 0.5;
  updateTransform();
};

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

svg.onwheel= zoom;
svg.addEventListener('mousedown', startPan);
svg.addEventListener('mousemove', pan);
svg.addEventListener('mouseup', endPan);
svg.addEventListener('touchstart', startPan);
svg.addEventListener('touchmove', pan);
svg.addEventListener('touchend', endPan);



let locations = document.querySelectorAll('.st3');
locations.forEach((location) => {
  location.addEventListener('click', () => {
    let locationbox = document.querySelector('#' + location.id + '-box');
    if (locationbox.classList.contains('none')) {
      locationbox.classList.remove('none');
      locationbox.querySelector('.exit').onclick = function () {
        locationbox.classList.add('none');
      }
    }

  });
});

let ChartData = [
  {
    id: 1,
    temperature: 25,
    humidity: 88,
    timestamp: "2023-07-18T16:58:59.096Z"
  },
  {
    id: 2,
    temperature: 24,
    humidity: 68,
    timestamp: "2023-07-18T17:58:59.096Z"
  },
  {
    id: 3,
    temperature: 26,
    humidity: 80,
    timestamp: "2023-07-18T18:58:59.096Z"
  },
  {
    id: 4,
    temperature: 26,
    humidity: 85,
    timestamp: "2023-07-18T19:58:59.096Z"
  },
  {
    id: 5,
    temperature: 28,
    humidity: 75,
    timestamp: "2023-07-18T20:58:59.096Z"
  },
  {
    id: 6,
    temperature: 40,
    humidity: 40,
    timestamp: "2023-07-18T21:58:59.096Z"
  },
  {
    id: 7,
    temperature: 22,
    humidity: 75,
    timestamp: "2023-07-18T22:58:59.096Z"
  },
];
var son_tra_1_temperature = {
  data: {
    labels: ChartData.reduce((curr, col) => {
      return curr.concat(col.timestamp.substring(11, 13) + ':00');
    }, []),
    datasets: [{
      label: "Nhiệt độ",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: ChartData.reduce((curr, col) => {
        return curr.concat(col.temperature);
      }, [])
    }]
  },

  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        max: 90,
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
  }
};
var son_tra_1_humidity = {
  data: {
    labels: ChartData.reduce((curr, col) => {
      return curr.concat(col.timestamp.substring(11, 13) + ':00');
    }, []),
    datasets: [{
      label: "Độ ẩm",
      backgroundColor: "#4da6ff",
      borderColor: "#426cf5",
      borderWidth: 2,
      hoverBackgroundColor: "#426cf5",
      hoverBorderColor: "#426cf5",
      data: ChartData.reduce((curr, col) => {
        return curr.concat(col.humidity);
      }, [])
    }]
  },

  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        max: 90,
        stacked: true,
        grid: {
          display: true,
          color: "#4da6ff"
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  }
};

let son_tra_1_chart;
let son_tra_1_chart_humidity;
function renderChart(chart, id, options, data) {
  chart = new Chart(id, {
    type: 'bar',
    options: options,
    data: data
  });
};
renderChart(son_tra_1_chart, 'son-tra-1-chart', son_tra_1_temperature.options, son_tra_1_temperature.data);
renderChart(son_tra_1_chart_humidity, 'son-tra-1-chart-humidity', son_tra_1_humidity.options, son_tra_1_humidity.data);
locations.forEach((location) => {
  location.addEventListener('click', () => {
    let locationbox = document.querySelector('#' + location.id + '-box');

    let temperatureButton = locationbox.querySelector('.temperature');
    let humidityButton = locationbox.querySelector('.humidity');
    let chart = locationbox.querySelector('#' + location.id + '-chart');
    let huChart = locationbox.querySelector('#' + location.id + '-chart-humidity');
    temperatureButton.addEventListener('click', () => {
      if (chart.classList.contains('none')) {
        chart.classList.remove('none');
      }
      if (!huChart.classList.contains('none')) {
        huChart.classList.add('none');
      }

    });
    humidityButton.addEventListener('click', () => {
      if (huChart.classList.contains('none')) {
        huChart.classList.remove('none');
      }
      if (!chart.classList.contains('none')) {
        chart.classList.add('none');
      }
    });

  });
});