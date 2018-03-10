import React from 'react';

export default function Letter(props) {
    const statusClassName = getClassNames(props)
    const className = `${statusClassName} letter`
    return (
        <span className={className}>
            {props.value}
        </span>
    )
}

function getClassNames(props = {}) {
    return props.status
}