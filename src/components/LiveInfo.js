import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ChartInfo from './ChartInfo';
import LastInfo from './LastInfo';
import '../styles/components/liveInfo.scss';

const LiveInfo = (props) => {

  return(
      <div>
        <Link to='minute'>Ir</Link>
        <ChartInfo />
        <LastInfo />
      </div>
  )
}

export default LiveInfo;