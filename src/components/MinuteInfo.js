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
            backgroundColor: 'rgba(85, 162, 181, 0.6',
            borderColor: '#3f51b5',
            borderWidth: 1,
            hoverBackgroundColor: '#55a2b5',
            hoverBorderColor: '#002129',
            data: []
          }
        ]
      },
      temperatureMinuteData: {
        labels: [],
        datasets: [
          {
            backgroundColor: 'rgba(204, 244, 227, 0.6)',
            borderColor: '#00cc76',
            borderWidth: 1,
            hoverBackgroundColor: '#9de6c8',
            hoverBorderColor: '#009688',
            data: []
          }
        ]
      } 
    }
  }


  componentDidMount() {
    const { 
      minutePowerInfo, 
      minuteTemperatureInfo, 
      minuteTime 
    } = this.props;
    const { 
      powerMinuteData,  
      temperatureMinuteData 
    } = this.state;
    
    this.setState({
      powerMinuteData: this.formatMinuteData(powerMinuteData, minutePowerInfo, minuteTime),
      temperatureMinuteData: this.formatMinuteData(temperatureMinuteData, minuteTemperatureInfo, minuteTime)
    })
  }

  componentDidUpdate(prevProps) {
    const { 
      minutePowerInfo, 
      minuteTemperatureInfo, 
      minuteTime 
    } = this.props;
    const { 
      minutePowerInfo: prevMinutePowerInfo, 
      minuteTemperatureInfo: prevMinuteTemperatureInfo, 
      minuteTime: prevMinuteTime 
    } = prevProps;
    const { 
      powerMinuteData,  
      temperatureMinuteData 
    } = this.state;

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
    const { 
      powerMinuteData, 
      temperatureMinuteData 
    } = this.state;
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
          <div className="minuteInfo__wrapper wrapper">
            <h3 className="minuteInfo__minute-name">Temperature</h3>
            <Bar className="minuteInfo__data"
              data={temperatureMinuteData}
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

MinuteInfo.propTypes = {
  minutePowerInfo: PropTypes.arrayOf(PropTypes.string).isRequired,
  minuteTemperatureInfo: PropTypes.arrayOf(PropTypes.string).isRequired,
  minuteTime: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MinuteInfo;