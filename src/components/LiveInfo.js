import React from 'react';
import PropTypes from 'prop-types';
import Chart from './Chart';
import LastInfo from './LastInfo';
import '../styles/liveInfo.scss';

const LiveInfo = (props) => {

  return(
      <div>
        <Chart/>
        <LastInfo />
      </div>
  )
}

export default LiveInfo;