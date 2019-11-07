import React from 'react';
import PropTypes from 'prop-types';
import ChartInfo from './ChartInfo';
import LastInfo from './LastInfo';
import '../styles/components/liveInfo.scss';

const LiveInfo = (props) => {
  const {  lastPowerInfo, lastTemperatureInfo} = props;

  return(
      <div>
        <ChartInfo />
        <div className="lastInfo__wrap">
          <h2 className="lastInfo__title">Last information</h2>
          <div className="lastInfo__container">
            <LastInfo className="lastInfo" value={lastPowerInfo.value} unit={lastPowerInfo.unit}>
              <i className="fas fa-bolt"></i>
            </LastInfo>
            <LastInfo className="lastInfo" value={lastTemperatureInfo.value} unit={lastTemperatureInfo.unit}>
              <i className="fas fa-thermometer-three-quarters"></i>
            </LastInfo>
          </div>
        </div>
      </div>
  )
}

export default LiveInfo;