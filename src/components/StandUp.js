import React from 'react';

const Standup = (props) => {
    return (
    <div>
        {props.name}
        <br />
        <button onClick={props.spin}>
            SPIN
            </button>
    </div>
    )
}

export default Standup;