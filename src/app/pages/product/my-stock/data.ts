import { ChartType } from './my-stock.model';

const stockBestSellingProductsBarChart: ChartType = {
  chart: {
    height: 180,
    type: 'bar',
    toolbar: {
      show: false
    },
    zoom: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      endingShape: 'flat',
      barHeight: '100%',
    },
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: ['Camiseta'],
      data: [10],
    },
    {
      name: ['Casaco'],
      data: [5]
    },
    {
      name: ['Boné'],
      data: [15]
    },
    {
      name: ['Bermuda'],
      data: [25]
    },
    {
      name: ['Gorro'],
      data: [5]
    }
  ],

  xaxis: {
    categories: [
      "Camiseta",
      "Casaco",
      "Boné",
      "Bermuda",
      "Gorro",
    ],

  },
  legend: {
    show: false,
  },
  fill: {
    opacity: 1,
    colors: [function({ value }) {
      if(value < 8) {
        return '#e60000'
      } else if (value >= 9 && value <= 15) {
        return '#ffff00'
      } else {
        return '#009600'
      }
    }]
  },
};

export { stockBestSellingProductsBarChart };
