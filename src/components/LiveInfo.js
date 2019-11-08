import React from 'react';
import PropTypes from 'prop-types';
import ChartInfo from './ChartInfo';
import LastInfo from './LastInfo';
import '../styles/components/liveInfo.scss';

const LiveInfo = (props) => {
  const {  
    powerInfo, 
    temperatureInfo, 
    time, 
    lastPowerInfo, 
    lastTemperatureInfo 
  } = props;

  return(
      <div>
        <ChartInfo 
          powerInfo={powerInfo} 
          temperatureInfo={temperatureInfo} 
          time={time}
        />
        <div className="liveInfo">
          <h2 className="liveInfo__title">Last information</h2>
          <div className="liveInfo__container">
            <LastInfo className="liveInfo__lastInfo" 
              value={lastPowerInfo.value} 
              unit={lastPowerInfo.unit}
            >
              <i className="fas fa-bolt"></i>
            </LastInfo>
            <LastInfo className="liveInfo__lastInfo" 
              value={lastTemperatureInfo.value} 
              unit={lastTemperatureInfo.unit}
            >
              <i className="fas fa-thermometer-three-quarters"></i>
            </LastInfo>
          </div>
        </div>
      </div>
  )
}

export default LiveInfo;