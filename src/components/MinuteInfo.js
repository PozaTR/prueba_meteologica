import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/minuteInfo.scss';

const MinuteInfo = (props) => {
  const { minutePowerInfo, minuteTemperatureInfo } = props
  return(
      <React.Fragment>
        <div>MinuteInfo</div>
        <p>{minutePowerInfo}</p>
        <p>{minuteTemperatureInfo}</p>
      </React.Fragment>
  )
}

export default MinuteInfo;