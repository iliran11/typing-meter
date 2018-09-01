import React from 'react';

export default function ListItem(props) {
  return (
    <li className="list-item">
      <img src={props.icon} alt={''} />
      <span>{props.children}</span>
    </li>
  );
}
