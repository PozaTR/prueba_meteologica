import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import '../styles/components/chartInfo.scss';


 

class ChartInfo extends React.Component {
  constructor(props) {
    super(props);

    this.data = {
      labels: [this.props.time],
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
          data: [this.props.powerInfo]
        },
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
          data: [this.props.temperatureInfo]
        }
      ]
    };

    this.state = {
      powerInfo: [],
      temperatureInfo: [],
      time: []
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.powerInfo !== prevProps.powerInfo) {
      this.getChartInformation();
    }
  }

  getChartInformation() {
    this.setState({
      powerInfo: this.props.powerInfo,
      temperatureInfo: this.props.temperatureInfo,
      time: this.props.time
    })
  }

  render() {

    return(
      <section className="chartInfo__container">
        <h2 className="chartInfo__title">Up date information</h2>
        <Line className="chartInfo__data" data={this.data}/>
      </section>
  )
  }
}

export default ChartInfo;