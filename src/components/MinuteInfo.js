import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/components/minuteInfo.scss';

const MinuteInfo = (props) => {
  return(
      <React.Fragment>
        <Link to='/'>Volver</Link>
        <div>MinuteInfo</div>
      </React.Fragment>
  )
}

export default MinuteInfo;