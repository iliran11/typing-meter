import React from 'react';

export default function Tooltip(props) {
  return (
    <div className="tooltip">
        {`${props.result}%`}
    </div>
  )
}

