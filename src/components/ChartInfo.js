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
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(63, 81, 181, 1)',
            borderColor: 'rgba(63, 81, 181, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(238, 238, 238, 1)',
            pointBackgroundColor: 'rgba(0, 0, 0, 1)',
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(0, 33, 41, 1)',
            pointHoverBorderColor: 'rgba(0, 33, 41, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
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
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(0, 204, 118, 1)',
            borderColor: 'rgba(0, 204, 118, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.5,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(238, 238, 238, 1)',
            pointBackgroundColor:'rgba(0, 0, 0, 1)',
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(0, 150, 136, 1)',
            pointHoverBorderColor: 'rgba(0, 150, 136, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
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
      <section className="chartInfo__container">
        <h2 className="chartInfo__title">Live stream information</h2>
        <div className="chartInfo__wrapper">
          <h3>Power</h3>
          <Line className="chartInfo__data"
            data={powerChartData}
            width={100}
            height={50}
            legend={{display: false}}
          />
        </div>
       <div className="chartInfo__wrapper">
          <h3>Temperature</h3>
          <Line className="chartInfo__data"
            data={temperatureChartData}
            width={100}
            height={50}
            legend={{display: false}}
          />  
       </div>
       
      </section>
  )
  }
}

export default ChartInfo;