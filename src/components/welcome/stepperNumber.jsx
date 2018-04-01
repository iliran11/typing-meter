import React from 'react';

export default function Number(props) {
  return (
    <svg className="number-svg" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <circle id="circle" cx="64" cy="64" r="62" fill="#48a999" stroke="#00796b" strokeWidth="1" />
      <text id="text" x="38" y="95" fontFamily="Lato, sans-serif" fontWeight="700" fontSize="90px" fill="white">
        {props.number}
      </text>
    </svg>
  );
}
