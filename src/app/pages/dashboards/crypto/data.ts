import { ChartType } from './crypto.model';

const incomeExpensesChart: ChartType = {
    series: [
      {
        name: "Receita",
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: "Despesas",
        data: [11, 32, 45, 32, 34, 52, 41]
      }
    ],
  colors:["#006400","#ff0000"],
    chart: {
      height: 350,
      type: "area",
      toolbar: false,
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      categories: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"
      ]
    },
    markers: {
      color: "#000000"
    },
    yaxis: {
      show: true,
      title: {
        text: '(R$)'
      },
      min: 5,
      max: 110
    }
}

const totalSaleChart: ChartType = {
  series: [25, 56, 19],
  chart: {
    type: 'donut',
    height: 350,
  },
  labels: ['Máquina de cartão', 'Marketplace', 'Bandeira de cartão'],
  colors: ['#00007c', '#00a0d5', '#f0ff00'],
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
            color: '#1F0D0D',
            offsetY: 2,
          }
        }
      },
    }
  }
}

const totalFeeChart: ChartType = {
  series: [
    {
      name: "Taxas",
      data: [100, 400, 150, 220]
    },
    {
      name: "Vendas",
      data: [440, 550, 410, 370]
    }
  ],
    chart: {
    type: "bar",
      height: 239,
      stacked: true,
      toolbar: false,
  },
  colors: ['#00a0d5','#00007c'],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '30%',
    }
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 1,
      colors: ["#fff"]
  },
  xaxis: {
    categories: ["Via Varejo", "Magazine Luiza", "Amazon", "Mercado Livre"],
  },
  yaxis: {
    title: {
      text: undefined
    },
    min: 5
  },
  legend: {
    position: "bottom",
      horizontalAlign: "left",
      offsetX: 40
  }
}

export { incomeExpensesChart, totalSaleChart, totalFeeChart };
