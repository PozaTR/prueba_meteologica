import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import '../styles/components/chartInfo.scss';


 

class ChartInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      powerChartData : {
        labels: [],
        datasets: [
          {
            label: 'Power',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(85, 162, 181, 0.6)',
            borderColor: '#3f51b5',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#002129',
            pointBackgroundColor: '#002129',
            pointBorderWidth: 0,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#55a2b5',
            pointHoverBorderColor: '#002129',
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 10,
            data: []
          }
        ]
      },
      temperatureChartData : {
        labels: [],
        datasets: [
          {
            label: 'Temperature',
            fill: true,
            lineTension: 0.5,
            backgroundColor: 'rgba(204, 244, 227, 0.6)',
            borderColor: '#00cc76',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#009688',
            pointBackgroundColor:'#009688',
            pointBorderWidth: 0,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#9de6c8',
            pointHoverBorderColor: '#009688',
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 10,
            data: []
          }
        ]
      }
    }
  }

  componentDidUpdate(prevProps) {
    const { powerInfo, temperatureInfo, time } = this.props;
    const { powerInfo: prevPowerInfo, temperatureInfo: prevTemperatureInfo, time: prevTime } = prevProps;
    const { powerChartData, temperatureChartData } = this.state;

    if (powerInfo !== prevPowerInfo || temperatureInfo !== prevTemperatureInfo || time !== prevTime) {
      this.setState({
       powerChartData: this.formatChartData(powerChartData, powerInfo, time),
       temperatureChartData: this.formatChartData(temperatureChartData, temperatureInfo, time)
      })
    }
  }

  formatChartData( chartData, data, labels) {
    return {
      ...chartData,
      labels: labels,
      datasets: [
        { ...chartData.datasets[0], data: data }
      ]
    }
  }

  render() {
    const { powerChartData,  temperatureChartData } = this.state;

    return(
      <section className="chartInfo">
        <h2 className="chartInfo__title">Live stream information</h2>
        <div className="chartInfo__wrapper wrapper">
          <h3 className="chartInfo__chart-name">Power</h3>
          <Line className="chartInfo__data"
            data={powerChartData}
            width={100}
            height={50}
            legend={{display: false}}
            options={{
              scales: {
                  yAxes: [{
                      ticks: {
                          fontSize: 10
                      }
                  }],
                  xAxes: [{
                    ticks: {
                        fontSize: 10
                    }
                }]
              }
            }}
          />
        </div>
       <div className="chartInfo__wrapper wrapper">
          <h3 className="chartInfo__chart-name">Temperature</h3>
          <Line className="chartInfo__data"
            data={temperatureChartData}
            width={100}
            height={50}
            legend={{display: false}}
            options={{
              scales: {
                  yAxes: [{
                      ticks: {
                          fontSize: 10
                      }
                  }],
                  xAxes: [{
                    ticks: {
                        fontSize: 10
                    }
                }]
              }
            }}
          />  
       </div>
       
      </section>
  )
  }
}

export default ChartInfo;