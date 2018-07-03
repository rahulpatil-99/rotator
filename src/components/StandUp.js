import React from 'react';

const display = (name) =>(
    name?
        name:
    location.reload()
)

const Standup = (props) => {
    return (
    <div class="StandUp">
        {display(props.name)}
        <br />
        <button onClick={() => (props.spin(props.name))}>
            SPIN
            </button>
    </div>
    )
}

export default Standup;