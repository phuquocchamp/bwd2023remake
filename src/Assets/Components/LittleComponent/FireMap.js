import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsMap from 'highcharts/modules/map';

const Firemap = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const renderMap = async () => {
      const geojson = await fetch('https://raw.githubusercontent.com/tatrunghieu/covid-19-tracker/master/src/constants/vn-all.json?fbclid=IwAR201nq5eKtwm36ACizxpURRSsEadBZC_2atC181Mod6a-xTFZOFn93iDFw')
        .then(response => response.json());

      // Prepare the geojson
      const states = Highcharts.geojson(geojson, 'map');
      const rivers = Highcharts.geojson(geojson, 'mapline');
      const cities = Highcharts.geojson(geojson, 'mappoint');
      const specialCityLabels = {
        Melbourne: {
          align: 'right'
        },
        Canberra: {
          align: 'right',
          y: -5
        },
        Wollongong: {
          y: 5
        },
        Brisbane: {
          y: -5
        }
      };

      // Skip or move some labels to avoid collision
      states.forEach(state => {
        // Disable data labels
        if (state.properties.code_hasc === 'AU.CT' || state.properties.code_hasc === 'AU.JB') {
          state.dataLabels = {
            enabled: false
          };
        }
        if (state.properties.code_hasc === 'AU.TS') {
          state.dataLabels = {
            style: {
              color: 'orangered'
            }
          };
        }
        // Move center for data label
        if (state.properties.code_hasc === 'AU.SA') {
          state.middleY = 0.3;
        }
        if (state.properties.code_hasc === 'AU.QL') {
          state.middleY = 0.7;
        }
      });

      cities.forEach(city => {
        if (specialCityLabels[city.name]) {
          city.dataLabels = specialCityLabels[city.name];
        }
      });

      // Initialize the chart
      Highcharts.mapChart(chartContainerRef.current, {
        title: {
          text: 'Map with multiple geometry types'
        },

        accessibility: {
          point: {
            valueDescriptionFormat: '{xDescription}.'
          },
          description: 'Map of Australia, showing examples of multiple geometry types in Highcharts Maps: Map areas (used for regions), map lines (used for rivers), and map points (used for cities).'
        },

        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },

        series: [{
          name: 'States and territories',
          data: states,
          color: Highcharts.color(Highcharts.getOptions().colors[2])
            .setOpacity(0.75)
            .get(),
          states: {
            hover: {
              color: Highcharts.getOptions().colors[4]
            }
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}',
            style: {
              width: '80px', // force line-wrap
              textTransform: 'uppercase',
              fontWeight: 'normal',
              textOutline: 'none',
              color: '#888'
            }
          },
          tooltip: {
            pointFormat: '{point.name}'
          }
        }, {
          name: 'Rivers',
          type: 'mapline',
          data: rivers,
          states: {
            hover: {
              lineWidth: 3
            }
          },
          color: Highcharts.getOptions().colors[0],
          tooltip: {
            pointFormat: '{point.properties.NAME}'
          }
        }, {
          name: 'Cities',
          type: 'mappoint',
          data: cities,
          color: 'black',
          marker: {
            radius: 2
          },
          dataLabels: {
            align: 'left',
            verticalAlign: 'middle'
          },
          animation: false,
          tooltip: {
            pointFormat: '{point.name}'
          }
        }]
      });
    };

    HighchartsMap(Highcharts);
    renderMap();
  }, []);

  return <div ref={chartContainerRef} style={{position:'relative',height:'90vh',width:'100%',top:'140px',marginBottom:'200px'}}></div>;
};

export default Firemap;
