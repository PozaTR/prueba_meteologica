import React from 'react';
import PropTypes from 'prop-types';
import ChartInfo from './ChartInfo';
import LastInfo from './LastInfo';
import '../styles/components/liveInfo.scss';

const LiveInfo = (props) => {

  return(
      <div>
        <ChartInfo />
        <LastInfo />
      </div>
  )
}

export default LiveInfo;