import React from 'react';

export default function ListItem(props) {
  return (
    <li className='list-item'>
      <img src={props.icon} />
      <span>
        {props.children}
      </span>
    </li>
  );
}
