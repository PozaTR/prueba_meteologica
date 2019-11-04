import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Chart from './Chart';
import LastInfo from './LastInfo';
import '../styles/liveInfo.scss';

const LiveInfo = (props) => {

  return(
      <div>
        <Link to='minute'>Ir</Link>
        <Chart/>
        <LastInfo />
      </div>
  )
}

export default LiveInfo;