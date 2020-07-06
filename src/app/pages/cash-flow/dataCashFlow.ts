import { ChartType } from './echart.model';
import { graphic } from 'echarts';




const lineBarChart: ChartType = {
    // Setup grid
    grid: {
        zlevel: 0,
        x: 80,
        x2: 50,
        y: 30,
        y2: 30,
        borderWidth: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        orient: 'center',
        left: 0,
        top: 20,
        
    },
    color: ['#34c38f', '#DC3545', '#007BFF'],
    legend: {
        data: ['Entradas', 'Saídas', 'Receita'],
        textStyle: { color: '#8791af' }
    },
    xAxis: [
        {
            type: 'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            axisPointer: {
                type: 'shadow'
            },
            axisLine: {
                lineStyle: {
                    color: '#8791af'
                },
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'Receita',
            min: 0,
            max: 4000,
            interval: 500,
            axisLine: {
                lineStyle: {
                    color: '#8791af'
                },
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(166, 176, 207, 0.1)"
                }
            },
            axisLabel: {
                formatter: ' R$ {value}'
            }
        },
        {
            type: 'value',
            name: '',
            min: 0,
            max: 4000,
            interval: 500,
            axisLine: {
                lineStyle: {
                    color: '#8791af'
                },
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(166, 176, 207, 0.1)"
                }
            },
            axisLabel: {
                formatter: 'R$ {value}'
            }
        }
    ],
    series: [
        {
            name: 'Entradas',
            type: 'bar',
            data: [300, 1000, 2000, 500, 400, 900, 100, 100]
        },
        {
            name: 'Saídas',
            type: 'bar',
            data: [300, 200, 500, 100, 400, 100, 300, 400]
        },
        {
            name: 'Receita',
            type: 'line',
            yAxisIndex: 1,
            data: [0, 800, 2300, 2700, 2700, 3500, 3300,3000]
        }
    ]
};



export {lineBarChart};
