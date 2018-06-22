import React from 'react';
import propTypes from 'prop-types';


export default function Tooltip(props) {
  return (
    <div className="tooltip">
        {`${props.result}%`}
    </div>
  )
}

Tooltip.propTypes = {
  result: propTypes.number.isRequired
};