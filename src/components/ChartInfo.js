import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import '../styles/components/chartInfo.scss';


const data = {
  labels: ['00:00:00', '00:00:05', '00:00:10', '00:00:15', '00:00:20', '00:00:25', '00:00:30'],
  datasets: [
    {
      label: 'power',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 60, 55, 50, 45, 40, 45]
    },
    {
      label: 'temperature',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.5,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40, 50, 60]
    }
  ]
};

class ChartInfo extends React.Component {
  render() {
    return(
      <div className="chartInfo__container">
        <Line className="chartInfo__temperature" data={data}/>
      </div>
  )
  }
}

export default ChartInfo;