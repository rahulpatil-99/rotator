import React from 'react';

const display = (name) =>(
    name?
    name:
    location.reload()
)

const Standup = (props) => {
    return (
    <div>
        {display(props.name)}
        <br />
        <button onClick={() => (props.spin(props.name))}>
            SPIN
            </button>
    </div>
    )
}

export default Standup;