import { ChartType } from './saas.model';


const profitMargin: ChartType = {
  series: [{
    name: 'Despesas',
    type: 'column',
    data: [34, 57, 45, 30, 27, 13, 5, 37]
  }, {
    name: 'Vendas',
    type: 'column',
    data: [50, 60, 40, 30, 80, 90, 56, 63]
  }, {
    name: 'Lucro',
    type: 'line',
    data: [20, 29, 37, 36, 66, 45, 30, 78]
  }],
  chart: {
    height: 328,
    type: 'line',
    stacked: false,
    toolbar: false,
  },
  colors: ['#ff0000',"#0000ff","#00F921"],
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [1, 1, 4],
    curve: 'straight',
    dashArray: [0,0,4]
  },
  xaxis: {
    categories: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
  },
  yaxis: [
    {
      title: {
        text: "(R$) X MIL",
      },
      min: 5,
      max: 100
    },
    {
      show: false,
    },
    {
      opposite: true,
      title: {
        text: "(%)",
      },
      min: 5,
      max: 100
    },
  ],
  legend: {
    show: true
  }
};

const higherProfitsChart: ChartType = {
    series: [4264, 2525, 1245],
    chart: {
        type: 'donut',
        height: 300,
    },
    labels: ['Camiseta', 'Corta Vento', 'Bermuda'],
    colors: ['#556ee6', '#34c38f', '#f46a6a'],
    legend: {
      show: true,
      fontSize: '10px',
      position: 'bottom'
    },
  plotOptions: {
    pie: {
      startAngle: 0,
      expandOnClick: true,
      offsetX: 0,
      offsetY: 0,
      customScale: 1,
      dataLabels: {
        offset: 1,
        minAngleToShowLabel: 10,
      },
      donut: {
        size: '65%',
        labels: {
          show: true,
          value: {
            show: true,
            fontSize: '26px',
            fontWeight: 700,
            color: '#1F0D0D',
            offsetY: 2,
          },
          total: {
            show: true,
            color: '#1F0D0D',
          }
        }
      },
    }
  }
}

const bestSellersChart: ChartType = {
  series: [1000, 245, 654],
  chart: {
    type: 'donut',
    height: 300,
  },
  labels: ['Camiseta', 'Corta Vento', 'Bermuda'],
  colors: ['#556ee6', '#34c38f', '#f46a6a'],
  legend: {
    show: true,
    fontSize: '10px',
    position: 'bottom'
  },
  plotOptions: {
    pie: {
      startAngle: 0,
      expandOnClick: true,
      offsetX: 0,
      offsetY: 0,
      customScale: 1,
      dataLabels: {
        offset: 1,
        minAngleToShowLabel: 10,
      },
      donut: {
        size: '65%',
        labels: {
          show: true,
          value: {
            show: true,
            fontSize: '26px',
            fontWeight: 700,
            color: '#1F0D0D',
            offsetY: 2,
          },
          total: {
            show: true,
            color: '#1F0D0D',
          }
        }
      },
    }
  }
}

const averageTicketChart: ChartType = {
  series: [{
    name: 'Total de vendas',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201]
  }, {
    name: 'Ticket médio',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17]
  }],
  chart: {
    height: 350,
    type: 'line',
    toolbar: false,
  },
  stroke: {
    width: [0, 4]
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  labels: ['01 Jul 2020', '05 Jul 2020', '10 Jul 2020', '15 Jul 2020', '20 Jul 2020', '25 Jul 2020', '30 Jul 2020'],
  xaxis: {
    type: 'datetime'
  },
  yaxis: [{
    title: {
      text: 'unidades'
    }
  }, {
    opposite: true,
    min: 5,
    max: 100,
    title: {
      text: '(R$)'
    }
  }]
}

const salesChannelChart: ChartType = {
  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
      show: false
    },
    stacked: true,
    stackType: '100%'
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '15%',
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  colors: ['#10ADD5', '#EFF929', '#E609C1'],
  series: [{
    name: 'Amazon',
    data: [46, 20, 59, 30, 23, 58, 23, 60, 30]
  }, {
    name: 'Mercado Livre',
    data: [34, 66, 11, 35, 64, 12, 30, 30, 27]
  }, {
    name: 'Outros',
    data: [20, 14, 30, 45, 13, 30, 43, 10, 43]
  }],
  xaxis: {
    categories: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
  },
  fill: {
    opacity: 1
  },
  grid: {
    borderColor: '#f1f1f1'
  },
  tooltip: {
    y: {
      formatter: (val) => {
        return 'R$ ' + val + ' mil';
      }
    }
  }
}

const circulationChannelsChart: ChartType = {
  series: [1000, 500, 150],
  chart: {
    type: 'donut',
    height: 390,
  },
  labels: ['Amazon', 'Mercado Livre', 'Outros'],
  colors: ['#10ADD5', '#EFF929', '#E609C1'],
  legend: {
    show: true,
    position: 'bottom'
  },
  plotOptions: {
    pie: {
      startAngle: 0,
      expandOnClick: true,
      offsetX: 0,
      offsetY: 0,
      customScale: 1,
      dataLabels: {
        offset: 1,
        minAngleToShowLabel: 10,
      },
      donut: {
        size: '65%',
        labels: {
          show: true,
          value: {
            show: true,
            fontSize: '26px',
            fontWeight: 700,
            color: '#1F0D0D',
            offsetY: 2,
          },
          total: {
            show: true,
            color: '#1F0D0D',
          }
        }
      },
    }
  }
}

export { profitMargin, higherProfitsChart, bestSellersChart, averageTicketChart, salesChannelChart, circulationChannelsChart };
