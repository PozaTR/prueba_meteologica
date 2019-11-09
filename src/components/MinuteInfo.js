import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import '../styles/components/minuteInfo.scss';

class MinuteInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      powerMinuteData: {
        labels: [],
        datasets: [
          {
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: []
          }
        ]
      },
      temperatureMinuteData: {
        labels: [],
        datasets: [
          {
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: []
          }
        ]
      } 
    }
  }

  componentDidUpdate(prevProps) {
    const { minutePowerInfo, minuteTemperatureInfo, minuteTime } = this.props;
    const { minutePowerInfo: prevMinutePowerInfo, minuteTemperatureInfo: prevMinuteTemperatureInfo, minuteTime: prevMinuteTime } = prevProps;
    const { powerMinuteData,  temperatureMinuteData } = this.state;

    if(minutePowerInfo !== prevMinutePowerInfo || minuteTemperatureInfo !== prevMinuteTemperatureInfo || minuteTime !== prevMinuteTime)
      this.setState({
        powerMinuteData: this.formatMinuteData(powerMinuteData, minutePowerInfo, minuteTime),
        temperatureMinuteData: this.formatMinuteData(temperatureMinuteData, minuteTemperatureInfo, minuteTime)
      })
  }

  formatMinuteData( minuteData, data, labels) {
    return {
      ...minuteData,
      labels: labels,
      datasets: [
        {...minuteData.datasets[0], data: data}
      ]
    }
  }

  render() {
    const { powerMinuteData, temperatureMinuteData } = this.state;
    return(
        <section className="minuteInfo">
          <h2 className="minuteInfo__title">Summary by minute</h2>
          <div className="minuteInfo__wrapper wrapper">
            <h3 className="minuteInfo__minute-name">Power</h3>
            <Bar className="minuteInfo__data"
              data={powerMinuteData}
              width={100}
              height={50}
              legend={{display: false}}
            />
          </div>
          <div className="minuteInfo__wrapper wrapper">
            <h3 className="minuteInfo__minute-name">Temperature</h3>
            <Bar className="minuteInfo__data"
              data={temperatureMinuteData}
              width={100}
              height={50}
              legend={{display: false}}
            />
          </div>
        </section>
    )
  }
}

export default MinuteInfo;