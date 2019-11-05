import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/lastInfo.scss';

const LastInfo = (props) => {
  const { children, text } = props;

  return(
    <div className="lastInfo">
      <div className="lastInfo__icon">
        {children}
      </div>
      <p className="lastInfo__information">{text}</p>
    </div>
  )
}

LastInfo.propTypes = {
  children: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired
}

export default LastInfo;