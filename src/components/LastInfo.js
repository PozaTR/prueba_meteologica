import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/lastInfo.scss';

const LastInfo = (props) => {

  return(
    <div className="lastInfo">
      <div className="lastInfo__container">
        <div className="lastInfo__icon">
          <i className="fas fa-bolt"></i>
        </div>
        <p className="lastInfo__information">40 KW</p>
      </div>
    </div>
  )
}

export default LastInfo;