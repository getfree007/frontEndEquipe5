import { ChartType } from './cash-flow.model';


const inputOutputChart: ChartType = {
  series: [
    {
      name: 'Entradas',
      data: [31, 40, 36, 51, 49, 72, 69, 56, 68, 82, 68, 76]
    },
    {
      name: 'Saídas',
      data: [15, 30, 45, 23, 27, 18, 10, 56, 35, 23, 19, 8]
    }
  ],
  chart: {
    height: 340,
    type: 'line',
    toolbar: 'false',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
  },
  dataLabels: {
    enabled: true
  },
  colors: ['#009600','#e60000'],
  stroke: {
    curve: 'smooth',
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
  },
  yaxis: {
    title: {
      text: 'R$(Mil)'
    },
    min: 5,
    max: 100,
  },
  xaxis: {
    title: {
      text: 'Mês'
    },
    categories: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12']
  },
  markers: {
    size: 1
  },

  };

export { inputOutputChart };
