import React from 'react';
import PropTypes from 'prop-types';


export default function Tooltip(props) {
  return (
    <div className="tooltip">
        {`${props.result}%`}
    </div>
  )
}

Tooltip.propTypes = {
  result: PropTypes.number.isRequired
};