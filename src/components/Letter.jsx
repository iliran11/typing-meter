import React from 'react';

export default function Letter(props) {
    return (
        <span className={getClassNames(props)}>
            {props.value}
        </span>
    )
}

function getClassNames(props = {}) {
    return props.status
}